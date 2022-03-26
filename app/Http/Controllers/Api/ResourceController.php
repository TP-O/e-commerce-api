<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\Resource\UploadImageRequest;
use App\Services\ResourceService;

class ResourceController extends Controller
{
    private ResourceService $resourceService;

    public function __construct(ResourceService $resourceService)
    {
        $this->resourceService = $resourceService;

        $this->middleware('auth:sanctum')->only('uploadImage');
    }

    /**
     * Load the public image from local.
     *
     * @param string $imageId
     * @return \Symfony\Component\HttpFoundation\BinaryFileResponse
     */
    public function loadImage($imageId)
    {
        return $this->resourceService->loadImage($imageId);
    }

    /**
     * Upload new image.
     *
     * @param \App\Http\Requests\Resource\UploadImageRequest $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function uploadImage(UploadImageRequest $request)
    {
        $uploadImageInput = $request->validated();

        $imageId = $this->resourceService->storeImage(
            $uploadImageInput['file'],
            $uploadImageInput['ratio'],
        );

        return response()->json([
            'status' => true,
            'data' => [
                'image_id' => $imageId,
            ],
        ]);
    }
}
