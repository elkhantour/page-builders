<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Services\BuilderRegistryService;

/**
 * Handles the JSON response used during API call.
 */
class BuilderController extends Controller
{
    public function show(string $label, BuilderRegistryService $service)
    {
        return response()->json($service->findByLabel($label));
    }
}
