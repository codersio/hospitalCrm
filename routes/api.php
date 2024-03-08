<?php

use App\Http\Controllers\Admin\AppoinmentController;
use App\Http\Controllers\Admin\IpdController;
use App\Http\Controllers\Admin\opdController;
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
    // patients api call route
    Route::post('patient-store', [PatientController::class, 'store'])->name('patient-store');
    Route::get('patient-fetch', [PatientController::class, 'patientsFetch'])->name('patient-fetch');

    // opd_api call route
    Route::post('opd-store', [opdController::class, 'opdStore'])->name('opd-store');
    Route::post('opd-fetch', [opdController::class, 'opdFetch'])->name('opd-fetch');
    Route::post('me', [opdController::class, 'me'])->name('me');

    // ipd_api call route
    Route::post('ipd-store', [IpdController::class, 'ipdStore'])->name('ipd-store');
    Route::post('ipd-fetch', [IpdController::class, 'ipdFetch'])->name('ipd-fetch');
    // appoinment api call route
    Route::post('appoinment-store', [AppoinmentController::class, 'store'])->name('ipd-store');
    Route::post('appoinment-fetch', [AppoinmentController::class, 'appoinmentFetch'])->name('appoinment-fetch');
    Route::post('appoinment-update', [AppoinmentController::class, 'appoinmentupdate'])->name('appoinment-update');
    Route::post('appoinment-delete', [AppoinmentController::class, 'appoinmentdelete'])->name('appoinment-delete');
    Route::post('appoinment-status-update/{id}', [AppoinmentController::class, 'status']);

    // /doctor api
    Route::post('doctor-store', [AppoinmentController::class, 'doctorStore'])->name('doctor-store');
    Route::post('doctor-fetch', [AppoinmentController::class, 'doctorfetch'])->name('doctor-fetch');
    Route::get('/doctors/{name}/fees', [AppoinmentController::class, 'getFeesByName']);
    Route::post('department', [AppoinmentController::class, 'department']);
    Route::post('departmentFetch', [AppoinmentController::class, 'departmentFetch']);
});
