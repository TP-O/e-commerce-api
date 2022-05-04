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
     * @param string $id
     * @return \Symfony\Component\HttpFoundation\BinaryFileResponse
     */
    public function loadImage(string $id)
    {
        return $this->resourceService->loadImage($id);
    }

    /**
     * Upload new image.
     *
     * @param \App\Http\Requests\Resource\UploadImageRequest $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function uploadImage(UploadImageRequest $request)
    {
        $imageData = [];

        foreach ($request->input('images') as $key => $image) {
            array_push($imageData, [
                ...$image,
                'file' => $request->file('images')[$key]['file'],
            ]);
        }

        $imageIds = $this->resourceService->storeImages($imageData);

        return response()->json([
            'status' => true,
            'data' => [
                'image_ids' => $imageIds,
            ],
        ]);
    }
}
