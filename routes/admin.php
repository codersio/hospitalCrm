<?php

use App\Http\Controllers\Admin\AdminAuthcontroller;
use App\Http\Controllers\Admin\AmbulanceControllr;
use App\Http\Controllers\Admin\AppoinmentController;
use App\Http\Controllers\Admin\BillingController;
use App\Http\Controllers\Admin\BloodbankController;
use App\Http\Controllers\Admin\DeathandBirthController;
use App\Http\Controllers\Admin\FinanceController;
use App\Http\Controllers\Admin\FrontOfficeControllr;
use App\Http\Controllers\Admin\HumanResourceController;
use App\Http\Controllers\Admin\InventoryController;
use App\Http\Controllers\Admin\IpdController;
use App\Http\Controllers\Admin\MedicineController;
use App\Http\Controllers\Admin\opdController;
use App\Http\Controllers\Admin\PathologyController;
use App\Http\Controllers\Admin\PharmacyController;
use App\Http\Controllers\Admin\RadiologyController;
use App\Http\Controllers\Admin\ReferalController;
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

    Route::get('radiology', [RadiologyController::class, 'index'])->name('radiology');
    Route::get('ambulance', [AmbulanceControllr::class, 'index'])->name('ambulance');
    Route::get('ambulance-list', [AmbulanceControllr::class, 'AmbulanceList'])->name('ambulance-list');
    Route::get('front-office', [FrontOfficeControllr::class, 'index'])->name('front-office');

    Route::group(['prefix' => 'front-office'], function () {
        Route::get('complain', [FrontOfficeControllr::class, 'ComplainIndex']);
        Route::get('phone-logs', [FrontOfficeControllr::class, 'PhoneLogsindex']);
        Route::get('receive', [FrontOfficeControllr::class, 'Receive']);
        Route::get('dispatch', [FrontOfficeControllr::class, 'Despatch']);
    });
    Route::get('death-record', [DeathandBirthController::class, 'deathRecord'])->name('death-record');
    Route::get('birth-record', [DeathandBirthController::class, 'birthRecord'])->name('birth-record');
    Route::get('income', [FinanceController::class, 'income'])->name('income');
    Route::get('expenses', [FinanceController::class, 'expenses'])->name('expenses');
    Route::get('tpamanagement', [FinanceController::class, 'tpamanagement'])->name('tpamanagement');
    Route::get('human-resource', [HumanResourceController::class, 'humanResource'])->name('human-resource');
    Route::get('referral', [ReferalController::class, 'referral'])->name('referral');
    Route::get('referral-person', [ReferalController::class, 'Addreferral'])->name('referral-person');

    Route::group(['prefix' => 'blood'], function () {
        Route::get('blood-bank', [BloodbankController::class, 'bloodbank'])->name('blood-bank');
        Route::get('blood-donor', [BloodbankController::class, 'blooddonor'])->name('blood-donor');
        Route::get('blood-issue', [BloodbankController::class, 'bloodissue'])->name('blood-issue');
        Route::get('component-issue', [BloodbankController::class, 'componentissue'])->name('component-issue');
        Route::get('component-list', [BloodbankController::class, 'componentlist'])->name('component-list');
    });
    Route::group(['prefix' => 'inventory'], function () {
        Route::get('item-stock', [InventoryController::class, 'ItemStocklist'])->name('item-stock');
        Route::get('item-issue', [InventoryController::class, 'ItemIssuet'])->name('item-issue');
        Route::get('item-list', [InventoryController::class, 'ItemList'])->name('item-list');
    });
    Route::group(['prefix' => 'pharmacy'], function () {
        Route::get('import-csv', [MedicineController::class, 'ItemStocklist'])->name('import-csv');
        Route::get('medicine', [MedicineController::class, 'medicine'])->name('medicine');
        Route::get('item-list', [MedicineController::class, 'ItemList'])->name('item-list');
        Route::get('medicine-list', [MedicineController::class, 'MedicineBillList'])->name('medicine-list');
    });
    Route::get('pathology', [PathologyController::class, 'index'])->name('pathology');
    Route::group(['prefix' => 'pathology'], function () {
        Route::get('test', [PathologyController::class, 'PathologyTest'])->name('test');
    });
    Route::group(['prefix' => 'radiology'], function () {
        Route::get('test', [RadiologyController::class, 'RadiologyTest'])->name('test');
    });
});
