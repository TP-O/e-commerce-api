<?php

namespace App\Services;

use Illuminate\Support\Facades\Storage;
use Intervention\Image\Image;
use Intervention\Image\Facades\Image as ImageFacade;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;

class ResourceService
{
    /**
     * The image will be loaded in order of extension's priority.
     */
    private $imageExtensions = [
        'jpg',
        'jpeg',
        'png',
    ];

    /**
     * Supported image ratios.
     */
    private $imageRatios = [
        [1, 1],
        [2, 1],
    ];

    /**
     * Maximum image widths.
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
     */
    private $resourcePaths = [
        'image' => 'public/image/',
    ];

    /**
     * Load the public image from local.
     *
     * @param string $imageId
     */
    public function loadImage($imageId)
    {
        foreach ($this->imageExtensions as $extension) {
            try {
                return response()->file(
                    storage_path('app/' . $this->resourcePaths['image'] . $imageId . '.' . $extension)
                );
            } catch (\Exception $_) {
                continue;
            }
        }

        throw new NotFoundHttpException('File does not exist!');
    }

    /**
     * Calculate width and height of image.
     *
     * @param string $key
     * @param int $ratio
     * @return array<int, int>
     */
    private function calculateImageSize($key, $ratioId)
    {
        return [
            $this->maxImageWidths[$key][$ratioId],
            $this->maxImageWidths[$key][$ratioId] *
                $this->imageRatios[$ratioId][1] / $this->imageRatios[$ratioId][0]
        ];
    }

    /**
     * Crop the image as a square.
     *
     * @param \Intervention\Image\Image $image
     * @param array<int, int> $ratioId
     * @return \Intervention\Image\Image
     */
    private function processImage(Image $image, $ratioId)
    {
        $width = $image->getWidth();
        $height = $image->getHeight();

        if ($width / $height === $this->imageRatios[$ratioId][0] / $this->imageRatios[$ratioId][1]) {
            if ($width > $this->maxImageWidths['md'][$ratioId]) {
                return $image->resize(...$this->calculateImageSize('md', $ratioId));
            }
        } else {
            $image->fit(...$this->calculateImageSize('md', $ratioId));
        }

        return $image;
    }

    /**
     * Store an image.
     *
     * @param Illuminate\Http\UploadedFile|string $file
     * @param int $ratioId
     * @return string
     */
    public function storeImage($file, $ratioId)
    {
        $imageId = md5((string) time());
        $extension = is_string($file) ? 'jpg' : $file->extension();
        $image = $this->processImage(ImageFacade::make($file), $ratioId)->encode($extension);

        Storage::put(
            $this->resourcePaths['image'] . $imageId . '.' . $extension,
            $image->__toString(),
        );
        Storage::put(
            $this->resourcePaths['image'] . $imageId . '_tn.' . $extension,
            $image->resize($image->resize(...$this->calculateImageSize('tn', $ratioId)))
                ->encode($extension)
                ->__toString(),
        );

        return $imageId;
    }
}
