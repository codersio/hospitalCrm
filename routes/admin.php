<?php

use App\Http\Controllers\Admin\AdminAuthcontroller;
use App\Http\Controllers\Admin\AmbulanceControllr;
use App\Http\Controllers\Admin\AppoinmentController;
use App\Http\Controllers\Admin\BillingController;
use App\Http\Controllers\Admin\IpdController;
use App\Http\Controllers\Admin\opdController;
use App\Http\Controllers\Admin\PathologyController;
use App\Http\Controllers\Admin\PharmacyController;
use App\Http\Controllers\Admin\RadiologyController;
use App\Http\Controllers\AdminController;
// use App\Http\Controllers\OpdController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/test', function () {
    return Inertia::render('test');
})->name('test');

// Route::group('admin')
Route::post('admin-login', [AdminAuthcontroller::class, 'login'])->name('admin-login');
Route::get('admin/login-page', [AdminAuthcontroller::class, 'login_page'])->name('admin/login-page');
Route::group([
    'middleware' => 'admin-api',
    'prefix' => 'admin',
], function ($router) {
    Route::get('dashboard', [AdminController::class, 'dashboard'])->name('dashboard');
    Route::get('billing', [BillingController::class, 'Index'])->name('billing');
    Route::get('destroy', [AdminAuthcontroller::class, 'destroy'])->name('destroy');
    Route::get('appoinment', [AppoinmentController::class, 'index'])->name('appoinment');
    Route::get('opd-patients', [opdController::class, 'index'])->name('opd-patients');
    Route::get('ipd-patients', [IpdController::class, 'index'])->name('ipd-patients');
    Route::get('pharmacy', [PharmacyController::class, 'index'])->name('pharmacy');
    Route::get('pathology', [PathologyController::class, 'index'])->name('pathology');
    Route::get('radiology', [RadiologyController::class, 'index'])->name('radiology');
    Route::get('ambulance', [AmbulanceControllr::class, 'index'])->name('ambulance');
});