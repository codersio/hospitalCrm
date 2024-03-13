<?php

use App\Http\Controllers\Admin\AmbulanceControllr;
use App\Http\Controllers\Admin\AppoinmentController;
use App\Http\Controllers\Admin\FrontOfficeControllr;
use App\Http\Controllers\Admin\IpdController;
use App\Http\Controllers\Admin\MedicineController;
use App\Http\Controllers\Admin\opdController;
use App\Http\Controllers\Admin\PathologyController;
use App\Http\Controllers\Admin\PatientController;
use App\Http\Controllers\Admin\PharmacyController;
use App\Http\Controllers\Admin\RadiologyController;
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

    // pharmacy api call
    Route::post('pharmacy-store', [PharmacyController::class, 'pharmacyStore'])->name('pharmacy-store');
    Route::post('pharmacy-fetch-bill', [PharmacyController::class, 'pharmacybillList'])->name('pharmacy-fetch-bill');
    Route::post('pharmacy-update', [PharmacyController::class, 'pharmacyupdate'])->name('pharmacy-update');
    Route::post('pharmacy-delete', [PharmacyController::class, 'pharmacydelete'])->name('pharmacy-delete');
    Route::post('pharmacy-status-update/{id}', [PharmacyController::class, 'pharmacystatus']);

    // medicine api call
    Route::post('medicine-store', [MedicineController::class, 'medicineStore'])->name('medicine-store');
    Route::post('medicine-store-csv', [MedicineController::class, 'CsvCategoryupload'])->name('medicine-store-csv');
    Route::post('medicine-category-store', [MedicineController::class, 'medicineCategorystore'])->name('medicine-category-store');
    Route::post('medicine-fetch', [MedicineController::class, 'medicineFetch'])->name('medicine-fetch');
    Route::post('medicine-update', [MedicineController::class, 'medicineupdate'])->name('medicine-update');
    Route::post('medicine-delete', [MedicineController::class, 'medicinedelete'])->name('medicine-delete');
    Route::post('medicine-status-update/{id}', [MedicineController::class, 'medicinestatus']);
    Route::post('medicine-bill-store', [MedicineController::class, 'MedicineBill']);

    // pathology api call

    Route::post('pathology-store-bill', [PathologyController::class, 'PathologyBill'])->name('pathology-store-bill');
    Route::post('pathology-fetch-bill', [PathologyController::class, 'pathologyBillFetch'])->name('pathology-fetch-bill');
    Route::post('pathology-test-store', [PathologyController::class, 'PathologyTeststore'])->name('pathology-test-store');
    Route::post('pathology-test-list', [PathologyController::class, 'PathologyTestList'])->name('pathology-test-list');

    // radiology api call
    Route::post('radiology-store-bill', [RadiologyController::class, 'RadiologyBill'])->name('radiology-store-bill');
    Route::post('radiology-fetch-bill', [RadiologyController::class, 'RadiologyBillFetch'])->name('radiology-fetch-bill');
    Route::post('radiology-test-store', [RadiologyController::class, 'RadiologyTeststore'])->name('radiology-test-store');
    Route::post('radiology-test-list', [RadiologyController::class, 'RadiologyTestList'])->name('radiology-test-list');

    // ambulance api call
    Route::post('ambulance-store-bill', [AmbulanceControllr::class, 'AmbulanceBillStore'])->name('ambulance-store-bill');
    Route::post('ambulance-fetch-bill', [AmbulanceControllr::class, 'AmbulanceBillFetch'])->name('ambulance-fetch-bill');
    Route::post('ambulance-update', [AmbulanceControllr::class, 'ambulanceupdate'])->name('ambulance-update');
    Route::post('ambulance-delete', [AmbulanceControllr::class, 'AmbulancelistList'])->name('ambulance-list');
    Route::post('ambulance-list', [AmbulanceControllr::class, 'AmbulancelistList']);
    Route::post('ambulance-list-store', [AmbulanceControllr::class, 'AmbulancelistStore']);

    // /front office api cal
    Route::post('front-office-store', [FrontOfficeControllr::class, 'FrontOfficeStore'])->name('front-office-store');
    Route::post('front-office-fetch-bill', [FrontOfficeControllr::class, 'AmbulanceBillFetch'])->name('front-office-fetch-bill');
    Route::post('front-office-update', [FrontOfficeControllr::class, 'ambulanceupdate'])->name('front-office-update');
    Route::post('front-office-delete/{id}', [FrontOfficeControllr::class, 'FrontofficeDelete'])->name('front-office-delete');
    Route::post('front-office-list', [FrontOfficeControllr::class, 'AmbulancelistList']);

    // phoneLogs api call
    Route::post('phone-logs-store', [FrontOfficeControllr::class, 'phoneLogsStore'])->name('phone-logs-store');
    Route::post('phone-logs-fetch', [FrontOfficeControllr::class, 'phoneLogsFetch'])->name('phone-logs-fetch');
    Route::post('phone-logs-update/{id}', [FrontOfficeControllr::class, 'phoneLogsUpdate'])->name('phone-logs-update');
    Route::post('phone-logs-delete/{id}', [FrontOfficeControllr::class, 'phoneLogsDelete'])->name('phone-logs-delete');

    // complain api call

    Route::post('complain-store', [FrontOfficeControllr::class, 'complainStore'])->name('complain-store');
    Route::delete('complain-delete/{id}', [FrontOfficeControllr::class, 'complainDelete'])->name('complain-delete');
    Route::post('complain-update/{id}', [FrontOfficeControllr::class, 'complainUpdate'])->name('complain-update');
    Route::post('complain-fetch', [FrontOfficeControllr::class, 'complainFetch'])->name('complain-fetch');

    // dispatch api call
    Route::post('dispatch-store', [FrontOfficeControllr::class, 'dispatchStore'])->name('dispatch-store');
    Route::post('dispatch-delete/{id}', [FrontOfficeControllr::class, 'dispatchDelete'])->name('dispatch-delete');
    Route::post('dispatch-update/{id}', [FrontOfficeControllr::class, 'dispatchUpdate'])->name('dispatch-update');
    Route::post('dispatch-fetch', [FrontOfficeControllr::class, 'dispatchFetch'])->name('dispatch-fetch');

    // recive api call
    Route::post('recive-store', [FrontOfficeControllr::class, 'reciveStore'])->name('recive-store');
    Route::post('recive-delete/{id}', [FrontOfficeControllr::class, 'reciveDelete'])->name('recive-delete');
    Route::post('recive-update/{id}', [FrontOfficeControllr::class, 'reciveUpdate'])->name('recive-update');
    Route::post('recive-fetch', [FrontOfficeControllr::class, 'reciveFetch'])->name('recive-fetch');
});
