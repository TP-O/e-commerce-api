<?php

namespace App\Http\Controllers\Asset;

use App\Http\Controllers\Controller;
use App\Services\AssetService;

class ImageController extends Controller
{
    private AssetService $assetService;

    public function __construct(AssetService $assetService)
    {
        $this->assetService = $assetService;
    }

    /**
     * Load the public image from local.
     *
     * @param string $subPath
     *
     */
    public function loadPublicImage(string $subPath)
    {
        return $this->assetService->responsePublicImage($subPath);
    }
}
