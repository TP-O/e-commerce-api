<?php

namespace App\Services;

use Illuminate\Support\Facades\Storage;
use Intervention\Image\Image;
use Intervention\Image\Facades\Image as ImageFacade;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;

class AssetService
{
    /**
     * The image will be loaded in order of extension's priority.
     *
     * @var array<int, string>
     */
    private $extensions = [
        'jpg',
        'jpeg',
        'png',
    ];

    /**
     * Path to avatar directory.
     *
     * @var string
     */
    private $avatarDir = 'public/images/avatars/';

    /**
     * Load the public image from local.
     *
     * @param string $subPath
     */
    public function responsePublicImage(string $subPath)
    {
        foreach ($this->extensions as $extension) {
            try {
                return response()->file(storage_path("app/public/images/$subPath.$extension"));
            }
            catch (\Exception $_) {
                continue;
            }
        }

        throw new NotFoundHttpException('File does not exist!');
    }

    /**
     * Crop the image as a square.
     *
     * @param \Intervention\Image\Image $image
     * @param int $size
     * @return \Intervention\Image\Image
     */
    private function convertToSquare(Image $image, int $size, $format)
    {
        $image->fit($image->width() > $image->height() ? $image->height() :$image->width());

        return $image->width() <= $size ? $image : $image->crop($size, $size);
    }

    /**
     * Store the avatar image.
     *
     * @param \Illuminate\Http\UploadedFile|string $file
     * @return string
     */
    public function storeAvatar($file)
    {
        $name = md5((string) time());
        $exntesion = is_string($file) ? 'jpg' : $file->extension();
        $image = $this->convertToSquare(ImageFacade::make($file), 600, 600)->encode($exntesion);

        Storage::put($this->avatarDir . $name . '.jpg', $image->__toString());
        Storage::put($this->avatarDir . $name . '_tn.jpg',
            $image->resize(120, 120)
                ->encode($exntesion)
                ->__toString());

        return $this->avatarDir . $name;
    }
}
