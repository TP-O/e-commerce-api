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
        $imageId = $this->resourceService->storeImage(
            $request->file('image'),
            $request->input('ratio'),
            $request->input('is_demo'),
        );

        return response()->json([
            'status' => true,
            'data' => [
                'id' => $imageId,
            ],
        ]);
    }
}
