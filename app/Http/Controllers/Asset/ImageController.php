<?php

namespace App\Http\Controllers\Asset;

use App\Http\Controllers\Controller;
use App\Services\AssetService;

class ImageController extends Controller
{
    /**
     * Load the public image from local.
     *
     * @param string $subPath
     *
     */
    public function loadPublicImage(AssetService $assetService, string $subPath)
    {
        return $assetService->responsePublicImage($subPath);
    }
}
