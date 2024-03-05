<?php

use App\Http\Controllers\Admin\PatientController;
use App\Http\Controllers\AdminController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });

// Route::post('admin-create', [AdminController::class,"create"])->name('admin-create');
Route::group([
    'prefix' => 'admin',
], function ($router) {
    Route::post('patient-store', [PatientController::class, 'store'])->name('patient-store');
    Route::post('patient-fetch', [PatientController::class, 'patientsFetch'])->name('patient-fetch');
});
