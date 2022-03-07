<?php

namespace App\Services\Common;

use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Storage;
use Intervention\Image\Image as InterventionImage;
use Intervention\Image\Facades\Image;

class AssetService
{
    /**
     * Resize then crop image.
     *
     * @param \Intervention\Image\Image $image
     * @param int $width
     * @param int $height
     * @return \Intervention\Image\Image
     */
    private function resizeAndCropImage(InterventionImage $image, int $width, int $height)
    {
        if ($image->width() < $width || $image->height() < $height) {
            if ($image->width() < $width && $image->height() < $height) {
                $image->resize($width, $height);
            }
            else if ($image->width() < $width) {
                $image->resize($width);
            }
            else {
                $image->resize(null, $height);
            }

            $image->resize($width);
        }

        return $image->crop($width, $height);
    }

    /**
     * Store avatar iamge.
     *
     * @param \Illuminate\Http\UploadedFile|string $file
     * @return string
     */
    public function storeAvatar($file)
    {
        $image = $this->resizeAndCropImage(Image::make($file), 600, 600)->encode('jpg');
        $imagePath = 'public/avatars/' . md5((string) time()) . '.jpg';

        Storage::put($imagePath, $image->__toString());

        return $imagePath;
    }
}
