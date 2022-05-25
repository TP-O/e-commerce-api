<?php

namespace App\Services;

use Exception;
use Illuminate\Support\Facades\Storage;
use Intervention\Image\Facades\Image as ImageFacade;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;

class ResourceService
{
    /**
     * The image will be loaded in order of extension's priority.
     *
     * @var array
     */
    private static $imageExtensions = [
        'jpg',
        'jpeg',
        'png',
        'jfif',
    ];

    /**
     * Supported image ratios.
     *
     * @var array
     */
    private $imageRatios = [
        [1, 1],
        [2, 1],
    ];

    /**
     * Maximum image widths.
     *
     * @var array
     */
    private $maxImageWidths = [
        'md' => [
            600,
            1200,
        ],
        'tn' => [
            120,
            320,
        ],
    ];

    /**
     * Resource storage paths.
     *
     * @var array
     */
    private static $resourcePaths = [
        'image' => 'public/image/',
    ];

    /**
     * Get supported image extensions.
     *
     * @return array
     */
    public static function getImageExtensions()
    {
        return self::$imageExtensions;
    }

    /**
     * Get resource paths.
     *
     * @return array
     */
    public static function getResourcePaths()
    {
        return self::$resourcePaths;
    }

    /**
     * Load the public image from local.
     *
     * @param string $imageId
     */
    public function loadImage($imageId)
    {
        foreach (self::$imageExtensions as $extension) {
            try {
                return response()->file(
                    storage_path(
                        'app/' . self::$resourcePaths['image'] . $imageId . '.' . $extension,
                    ),
                );
            } catch (Exception $_) {
                continue;
            }
        }

        throw new NotFoundHttpException('Image does not exist!');
    }

    /**
     * Calculate width and height of image.
     *
     * @param string $key
     * @param int $ratio
     * @return array
     */
    private function calculateImageSize($key, $ratioId)
    {
        return [
            $this->maxImageWidths[$key][$ratioId],
            $this->maxImageWidths[$key][$ratioId] *
                $this->imageRatios[$ratioId][1] / $this->imageRatios[$ratioId][0],
        ];
    }

    /**
     * Make the image have correct ratio and size.
     *
     * @param \Intervention\Image\Image $image
     * @param array $ratioId
     * @return \Intervention\Image\Image
     */
    private function processImage($image, $ratioId)
    {
        $width = $image->getWidth();
        $height = $image->getHeight();

        if ($width / $height === $this->imageRatios[$ratioId][0] / $this->imageRatios[$ratioId][1]) {
            // Resize if the image to too large
            if ($width > $this->maxImageWidths['md'][$ratioId]) {
                return $image->resize(...$this->calculateImageSize('md', $ratioId));
            }
        }
        // Handle specially if the image have incorrect ratio
        else {
            $image->fit(...$this->calculateImageSize('md', $ratioId));
        }

        return $image;
    }

    /**
     * Store the image.
     *
     * @param Illuminate\Http\UploadedFile|string $file
     * @param int $ratioId
     * @param bool $isDemo
     * @return string
     */
    public function storeImage($file, $ratioId, $isDemo = false)
    {
        $imageId = $isDemo
            ? 'demo-' . md5((string) time())
            : md5((string) time());
        $extension = is_string($file) ? 'jpg' : $file->extension();
        $image = $this->processImage(ImageFacade::make($file), $ratioId)->encode($extension);

        Storage::put(
            self::$resourcePaths['image'] . $imageId . '.' . $extension,
            $image->__toString(),
        );
        Storage::put(
            self::$resourcePaths['image'] . $imageId . '_tn.' . $extension,
            $image->resize($image->resize(...$this->calculateImageSize('tn', $ratioId)))
                ->encode($extension)
                ->__toString(),
        );

        return $imageId;
    }

    /**
     * Store the images.
     *
     * @param array $images
     * @return array
     */
    public function storeImages($images)
    {
        $imageIds = [];

        foreach ($images as $image) {
            $imageId = $this->storeImage(
                $image['image'],
                $image['ratio'],
                $image['is_demo'] ?? false,
            );

            array_push($imageIds, $imageId);
        }

        return $imageIds;
    }
}
