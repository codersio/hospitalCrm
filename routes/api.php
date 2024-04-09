<?php

use App\Http\Controllers\Admin\AmbulanceControllr;
use App\Http\Controllers\Admin\AppoinmentController;
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
use App\Http\Controllers\Admin\PatientController;
use App\Http\Controllers\Admin\PharmacyController;
use App\Http\Controllers\Admin\RadiologyController;
use App\Http\Controllers\Admin\ReferalController;
use App\Http\Controllers\Admin\setup\SetupController;
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
    Route::post('medicine-bill-store', [MedicineController::class, 'MedicineBill']);
    Route::post('medicine-category-store', [MedicineController::class, 'MedicineCategory']);
    Route::post('medicine-category-fetch', [MedicineController::class, 'medicinecategoryFetch']);
    Route::post('medicine-category-update/{id}', [MedicineController::class, 'MedicineCategoryUpdate']);
    Route::post('medicine-category-delete/{id}', [MedicineController::class, 'MedicineCategoryDelete']);

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
    Route::post('front-office-fetch-bill', [FrontOfficeControllr::class, 'FrontofficeList'])->name('front-office-fetch-bill');
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

    // deathcertificate api call
    Route::post('deathcertificate-store', [DeathandBirthController::class, 'deathcertificateStore'])->name('deathcertificate-store');
    Route::post('deathcertificate-delete/{id}', [DeathandBirthController::class, 'deathcertificateDelete'])->name('deathcertificate-delete');
    Route::post('deathcertificate-update/{id}', [DeathandBirthController::class, 'deathcertificateUpdate'])->name('deathcertificate-update');
    Route::post('deathcertificate-fetch', [DeathandBirthController::class, 'deathcertificateFetch'])->name('deathcertificate-fetch');

    // birthcerificate a[i calll
    Route::post('birthcertificate-store', [DeathandBirthController::class, 'birthcertificateStore'])->name('birthcertificate-store');
    Route::post('c/{id}', [DeathandBirthController::class, 'birthcertificateDelete'])->name('birthcertificate-delete');
    Route::post('birthcertificate-update/{id}', [DeathandBirthController::class, 'birthcertificateUpdate'])->name('birthcertificate-update');
    Route::post('birthcertificate-fetch', [DeathandBirthController::class, 'birthcertificateFetch'])->name('birthcertificate-fetch');

    // tpamanagement api call
    Route::post('tpamanagement-store', [FinanceController::class, 'tpamanagementStore'])->name('tpamanagement-store');
    Route::post('tpamanagement-delete/{id}', [FinanceController::class, 'tpamanagementDelete'])->name('tpamanagement-delete');
    Route::post('tpamanagement-update/{id}', [FinanceController::class, 'tpamanagementUpdate'])->name('tpamanagement-update');
    Route::post('tpamanagement-fetch', [FinanceController::class, 'tpamanagementFetch'])->name('tpamanagement-fetch');

    // expense api call
    Route::post('expense-store', [FinanceController::class, 'expenseStore'])->name('expense-store');
    Route::post('expense-delete/{id}', [FinanceController::class, 'expenseDelete'])->name('expense-delete');
    Route::post('expense-update/{id}', [FinanceController::class, 'expenseUpdate'])->name('expense-update');
    Route::post('expense-fetch', [FinanceController::class, 'expenseFetch'])->name('expense-fetch');

    // income api all
    Route::post('income-store', [FinanceController::class, 'incomeStore'])->name('income-store');
    Route::post('income-delete/{id}', [FinanceController::class, 'incomeDelete'])->name('income-delete');
    Route::post('income-update/{id}', [FinanceController::class, 'incomeUpdate'])->name('income-update');
    Route::post('income-fetch', [FinanceController::class, 'incomeFetch'])->name('income-fetch');

    // referral api call

    Route::post('referral-store', [ReferalController::class, 'referralStore'])->name('referral-store');
    Route::post('referral-delete/{id}', [ReferalController::class, 'referralDelete'])->name('referral-delete');
    Route::post('referral-update/{id}', [ReferalController::class, 'referralUpdate'])->name('referral-update');
    Route::post('referral-fetch', [ReferalController::class, 'referralFetch'])->name('referral-fetch');

    // referrablnill api call
    Route::post('referrablnill-store', [ReferalController::class, 'referrablnillStore'])->name('referrablnill-store');
    Route::post('referrablnill-delete/{id}', [ReferalController::class, 'referrablnillDelete'])->name('referrablnill-delete');
    Route::post('referrablnill-update/{id}', [ReferalController::class, 'referrablnillUpdate'])->name('referrablnill-update');
    Route::post('referrablnill-fetch', [ReferalController::class, 'referrablnillFetch'])->name('referrablnill-fetch');

    // humanresource api call

    Route::post('humanresource-store', [HumanResourceController::class, 'AdminStore'])->name('humanresource-store');
    Route::post('humanresource-fetch', [HumanResourceController::class, 'humanresourceFetch'])->name('humanresource-fetch');
    Route::get('/search', [HumanResourceController::class, 'search']);

    // inventory api cal
    Route::post('inventory-store', [InventoryController::class, 'inventoryStore'])->name('inventory-store');
    Route::post('inventory-delete/{id}', [InventoryController::class, 'inventoryDelete'])->name('inventory-delete');
    Route::post('inventory-update/{id}', [InventoryController::class, 'inventoryUpdate'])->name('inventory-update');
    Route::post('inventory-fetch', [InventoryController::class, 'inventoryFetch'])->name('inventory-fetch');

    // inventoryIssue
    Route::post('inventoryIssue-store', [InventoryController::class, 'inventoryIssueStore'])->name('inventoryIssue-store');
    Route::post('inventoryIssue-delete/{id}', [InventoryController::class, 'inventoryIssueDelete'])->name('inventoryIssue-delete');
    Route::post('inventoryIssue-update/{id}', [InventoryController::class, 'inventoryIssueUpdate'])->name('inventoryIssue-update');
    Route::post('inventoryIssue-fetch', [InventoryController::class, 'inventoryIssueFetch'])->name('inventoryIssue-fetch');
    Route::post('inventoryIssue-return/{id}', [InventoryController::class, 'ClickToReturn'])->name('inventoryIssue-return');

    // inventoryStockitem api
    Route::post('inventoryStockitem-store', [InventoryController::class, 'inventoryStockitemStore'])->name('inventoryStockitem-store');
    Route::post('inventoryStockitem-delete/{id}', [InventoryController::class, 'inventoryStockitemDelete'])->name('inventoryStockitem-delete');
    Route::post('inventoryStockitem-update/{id}', [InventoryController::class, 'inventoryStockitemUpdate'])->name('inventoryStockitem-update');
    Route::post('inventoryStockitem-fetch', [InventoryController::class, 'inventoryStockitemFetch'])->name('inventoryStockitem-fetch');

    // /hospitalChargeUnit api call
    Route::post('hospitalChargeUnit-store', [SetupController::class, 'hospitalChargeUnitStore'])->name('hospitalChargeUnit-store');
    Route::post('hospitalChargeUnit-delete/{id}', [SetupController::class, 'hospitalChargeUnitDelete'])->name('hospitalChargeUnit-delete');
    Route::post('hospitalChargeUnit-update/{id}', [SetupController::class, 'hospitalChargeUnitUpdate'])->name('hospitalChargeUnit-update');
    Route::post('hospitalChargeUnit-fetch', [SetupController::class, 'hospitalChargeUnitFetch'])->name('hospitalChargeUnit-fetch');

    // taxCategory percentage
    Route::post('taxCategory-store', [SetupController::class, 'taxCategoryStore'])->name('taxCategory-store');
    Route::post('taxCategory-delete/{id}', [SetupController::class, 'taxCategoryDelete'])->name('taxCategory-delete');
    Route::post('taxCategory-update/{id}', [SetupController::class, 'taxCategoryUpdate'])->name('taxCategory-update');
    Route::post('taxCategory-fetch', [SetupController::class, 'taxCategoryFetch'])->name('taxCategory-fetch');

    // hospitalchargetype api call
    Route::post('hospitalchargetype-store', [SetupController::class, 'hospitalchargetypeStore'])->name('hospitalchargetype-store');
    Route::post('hospitalchargetype-delete/{id}', [SetupController::class, 'hospitalchargetypeDelete'])->name('hospitalchargetype-delete');
    Route::post('hospitalchargetype-update/{id}', [SetupController::class, 'hospitalchargetypeUpdate'])->name('hospitalchargetype-update');
    Route::post('hospitalchargetype-fetch', [SetupController::class, 'hospitalchargetypeFetch'])->name('hospitalchargetype-fetch');

    // hospitalchargeCategory api call
    Route::post('hospitalchargeCategory-store', [SetupController::class, 'hospitalchargeCategoryStore'])->name('hospitalchargeCategory-store');
    Route::post('hospitalchargeCategory-delete/{id}', [SetupController::class, 'hospitalchargeCategoryDelete'])->name('hospitalchargeCategory-delete');
    Route::post('hospitalchargeCategory-update/{id}', [SetupController::class, 'hospitalchargeCategoryUpdate'])->name('hospitalchargeCategory-update');
    Route::post('hospitalchargeCategory-fetch', [SetupController::class, 'hospitalchargeCategoryFetch'])->name('hospitalchargeCategory-fetch');
    Route::post('hospitalchargeCategory/{id}', [SetupController::class, 'hospitalchargeCategoryId'])->name('hospitalchargeCategory-fetch');

    // hospitalcharge api call
    Route::post('hospitalcharge-store', [SetupController::class, 'hospitalchargeStore'])->name('hospitalcharge-store');
    Route::post('hospitalcharge-delete/{id}', [SetupController::class, 'hospitalchargeDelete'])->name('hospitalcharge-delete');
    Route::post('hospitalcharge-update/{id}', [SetupController::class, 'hospitalchargeUpdate'])->name('hospitalcharge-update');
    Route::post('hospitalcharge-fetch', [SetupController::class, 'hospitalchargeFetch'])->name('hospitalcharge-fetch');
    Route::post('hospitalcharge/{id}', [SetupController::class, 'hospitalchargeId'])->name('hospitalcharge-fetch');

    // hospital api call
    Route::post('hospital-store', [SetupController::class, 'hospitalStore'])->name('hospital-store');

    // medicinesupplier api call
    Route::post('medicinesupplier-store', [MedicineController::class, 'medicinesupplierStore'])->name('medicinesupplier-store');
    Route::post('medicinesupplier-delete/{id}', [MedicineController::class, 'medicinesupplierDelete'])->name('medicinesupplier-delete');
    Route::post('medicinesupplier-update/{id}', [MedicineController::class, 'medicinesupplierUpdate'])->name('medicinesupplier-update');
    Route::post('medicinesupplier-fetch', [MedicineController::class, 'medicinesupplierFetch'])->name('medicinesupplier-fetch');
    Route::post('medicinesupplier/{id}', [MedicineController::class, 'medicinesupplierId'])->name('medicinesupplier-fetch');

    // medicineDose api call
    Route::post('medicineDose-store', [MedicineController::class, 'medicineDoseStore'])->name('medicineDose-store');
    Route::post('medicineDose-delete/{id}', [MedicineController::class, 'medicineDoseDelete'])->name('medicineDose-delete');
    Route::post('medicineDose-update/{id}', [MedicineController::class, 'medicineDoseUpdate'])->name('medicineDose-update');
    Route::post('medicineDose-fetch', [MedicineController::class, 'medicineDoseFetch'])->name('medicineDose-fetch');
    Route::post('medicineDose/{id}', [MedicineController::class, 'medicineDoseId'])->name('medicineDose-fetch');

    // medicineInterval api call
    Route::post('medicineInterval-store', [MedicineController::class, 'medicineIntervalStore'])->name('medicineInterval-store');
    Route::post('medicineInterval-delete/{id}', [MedicineController::class, 'medicineIntervalDelete'])->name('medicineInterval-delete');
    Route::post('medicineInterval-update/{id}', [MedicineController::class, 'medicineIntervalUpdate'])->name('medicineInterval-update');
    Route::post('medicineInterval-fetch', [MedicineController::class, 'medicineIntervalFetch'])->name('medicineInterval-fetch');
    Route::post('medicineInterval/{id}', [MedicineController::class, 'medicineIntervalId'])->name('medicineInterval-fetch');

    // medicineDuration api call
    Route::post('medicineDuration-store', [MedicineController::class, 'medicineDurationStore'])->name('medicineDuration-store');
    Route::post('medicineDuration-delete/{id}', [MedicineController::class, 'medicineDurationDelete'])->name('medicineDuration-delete');
    Route::post('medicineDuration-update/{id}', [MedicineController::class, 'medicineDurationUpdate'])->name('medicineDuration-update');
    Route::post('medicineDuration-fetch', [MedicineController::class, 'medicineDurationFetch'])->name('medicineDuration-fetch');
    Route::post('medicineDuration/{id}', [MedicineController::class, 'medicineDurationId'])->name('medicineDuration-fetch');

    // pathologycategory api call
    Route::post('pathologycategory-store', [PathologyController::class, 'pathologycategoryStore'])->name('pathologycategory-store');
    Route::post('pathologycategory-delete/{id}', [PathologyController::class, 'pathologycategoryDelete'])->name('pathologycategory-delete');
    Route::post('pathologycategory-update/{id}', [PathologyController::class, 'pathologycategoryUpdate'])->name('pathologycategory-update');
    Route::post('pathologycategory-fetch', [PathologyController::class, 'pathologycategoryFetch'])->name('pathologycategory-fetch');
    Route::post('pathologycategory/{id}', [PathologyController::class, 'pathologycategoryId'])->name('pathologycategory-fetch');

    // / pathologyUnit api call
    Route::post('pathologyUnit-store', [PathologyController::class, 'pathologyUnitStore'])->name('pathologyUnit-store');
    Route::post('pathologyUnit-delete/{id}', [PathologyController::class, 'pathologyUnitDelete'])->name('pathologyUnit-delete');
    Route::post('pathologyUnit-update/{id}', [PathologyController::class, 'pathologyUnitUpdate'])->name('pathologyUnit-update');
    Route::post('pathologyUnit-fetch', [PathologyController::class, 'pathologyUnitFetch'])->name('pathologyUnit-fetch');
    Route::post('pathologyUnit/{id}', [PathologyController::class, 'pathologyUnitId'])->name('pathologyUnit-fetch');

    // pathologyparameter api call
    Route::post('pathologyparameter-store', [PathologyController::class, 'pathologyparameterStore'])->name('pathologyparameter-store');
    Route::post('pathologyparameter-delete/{id}', [PathologyController::class, 'pathologyparameterDelete'])->name('pathologyparameter-delete');
    Route::post('pathologyparameter-update/{id}', [PathologyController::class, 'pathologyparameterUpdate'])->name('pathologyparameter-update');
    Route::post('pathologyparameter-fetch', [PathologyController::class, 'pathologyparameterFetch'])->name('pathologyparameter-fetch');
    Route::post('pathologyparameter/{id}', [PathologyController::class, 'pathologyparameterId'])->name('pathologyparameter-fetch');

    // radiologycategory api call
    Route::post('radiologycategory-store', [RadiologyController::class, 'radiologycategoryStore'])->name('radiologycategory-store');
    Route::post('radiologycategory-delete/{id}', [RadiologyController::class, 'radiologycategoryDelete'])->name('radiologycategory-delete');
    Route::post('radiologycategory-update/{id}', [RadiologyController::class, 'radiologycategoryUpdate'])->name('radiologycategory-update');
    Route::post('radiologycategory-fetch', [RadiologyController::class, 'radiologycategoryFetch'])->name('radiologycategory-fetch');
    Route::post('radiologycategory/{id}', [RadiologyController::class, 'radiologycategoryId'])->name('radiologycategory-fetch');

    // / radiologyParameters api call
    Route::post('radiologyParameters-store', [RadiologyController::class, 'radiologyParametersStore'])->name('radiologyParameters-store');
    Route::post('radiologyParameters-delete/{id}', [RadiologyController::class, 'radiologyParametersDelete'])->name('radiologyParameters-delete');
    Route::post('radiologyParameters-update/{id}', [RadiologyController::class, 'radiologyParametersUpdate'])->name('radiologyParameters-update');
    Route::post('radiologyParameters-fetch', [RadiologyController::class, 'radiologyParametersFetch'])->name('radiologyParameters-fetch');
    Route::post('radiologyParameters/{id}', [RadiologyController::class, 'radiologyParametersId'])->name('radiologyParameters-fetch');

    // radiologyUnit api call
    Route::post('radiologyUnit-store', [RadiologyController::class, 'radiologyUnitStore'])->name('radiologyUnit-store');
    Route::post('radiologyUnit-delete/{id}', [RadiologyController::class, 'radiologyUnitDelete'])->name('radiologyUnit-delete');
    Route::post('radiologyUnit-update/{id}', [RadiologyController::class, 'radiologyUnitUpdate'])->name('radiologyUnit-update');
    Route::post('radiologyUnit-fetch', [RadiologyController::class, 'radiologyUnitFetch'])->name('radiologyUnit-fetch');
    Route::post('radiologyUnit/{id}', [RadiologyController::class, 'radiologyUnitId'])->name('radiologyUnit-fetch');

    // bloodbankProduct api call
    Route::post('bloodbankProduct-store', [BloodbankController::class, 'bloodbankProductStore'])->name('bloodbankProduct-store');
    Route::post('bloodbankProduct-delete/{id}', [BloodbankController::class, 'bloodbankProductDelete'])->name('bloodbankProduct-delete');
    Route::post('bloodbankProduct-update/{id}', [BloodbankController::class, 'bloodbankProductUpdate'])->name('bloodbankProduct-update');
    Route::post('bloodbankProduct-fetch', [BloodbankController::class, 'bloodbankProductFetch'])->name('bloodbankProduct-fetch');
    Route::post('bloodbankProduct/{id}', [BloodbankController::class, 'bloodbankProductId'])->name('bloodbankProduct-fetch');

    // bloodbankType api call
    Route::post('bloodbankType-store', [BloodbankController::class, 'bloodbankTypeStore'])->name('bloodbankType-store');
    Route::post('bloodbankType-delete/{id}', [BloodbankController::class, 'bloodbankTypeDelete'])->name('bloodbankType-delete');
    Route::post('bloodbankType-update/{id}', [BloodbankController::class, 'bloodbankTypeUpdate'])->name('bloodbankType-update');
    Route::post('bloodbankType-fetch', [BloodbankController::class, 'bloodbankTypeFetch'])->name('bloodbankType-fetch');
    Route::post('bloodbankType/{id}', [BloodbankController::class, 'bloodbankTypeId'])->name('bloodbankType-fetch');

    // appoinmentPriority api call
    Route::post('appoinmentPriority-store', [FrontOfficeControllr::class, 'appoinmentPriorityStore'])->name('appoinmentPriority-store');
    Route::post('appoinmentPriority-delete/{id}', [FrontOfficeControllr::class, 'appoinmentPriorityDelete'])->name('appoinmentPriority-delete');
    Route::post('appoinmentPriority-update/{id}', [FrontOfficeControllr::class, 'appoinmentPriorityUpdate'])->name('appoinmentPriority-update');
    Route::post('appoinmentPriority-fetch', [FrontOfficeControllr::class, 'appoinmentPriorityFetch'])->name('appoinmentPriority-fetch');
    Route::post('appoinmentPriority/{id}', [FrontOfficeControllr::class, 'appoinmentPriorityId'])->name('appoinmentPriority-fetch');

    // frontOfficeSource api call
    Route::post('frontOfficeSource-store', [FrontOfficeControllr::class, 'frontOfficeSourceStore'])->name('frontOfficeSource-store');
    Route::post('frontOfficeSource-delete/{id}', [FrontOfficeControllr::class, 'frontOfficeSourceDelete'])->name('frontOfficeSource-delete');
    Route::post('frontOfficeSource-update/{id}', [FrontOfficeControllr::class, 'frontOfficeSourceUpdate'])->name('frontOfficeSource-update');
    Route::post('frontOfficeSource-fetch', [FrontOfficeControllr::class, 'frontOfficeSourceFetch'])->name('frontOfficeSource-fetch');
    Route::post('frontOfficeSource/{id}', [FrontOfficeControllr::class, 'frontOfficeSourceId'])->name('frontOfficeSource-fetch');

    // complainType api call
    Route::post('complainType-store', [FrontOfficeControllr::class, 'complainTypeStore'])->name('complainType-store');
    Route::post('complainType-delete/{id}', [FrontOfficeControllr::class, 'complainTypeDelete'])->name('complainType-delete');
    Route::post('complainType-update/{id}', [FrontOfficeControllr::class, 'complainTypeUpdate'])->name('complainType-update');
    Route::post('complainType-fetch', [FrontOfficeControllr::class, 'complainTypeFetch'])->name('complainType-fetch');
    Route::post('complainType/{id}', [FrontOfficeControllr::class, 'complainTypeId'])->name('complainType-fetch');

    // purpose api call
    Route::post('purpose-store', [FrontOfficeControllr::class, 'purposeStore'])->name('purpose-store');
    Route::post('purpose-delete/{id}', [FrontOfficeControllr::class, 'purposeDelete'])->name('purpose-delete');
    Route::post('purpose-update/{id}', [FrontOfficeControllr::class, 'purposeUpdate'])->name('purpose-update');
    Route::post('purpose-fetch', [FrontOfficeControllr::class, 'purposeFetch'])->name('purpose-fetch');
    Route::post('purpose/{id}', [FrontOfficeControllr::class, 'purposeId'])->name('purpose-fetch');

    // floor
    Route::post('floor-store', [FrontOfficeControllr::class, 'floorStore'])->name('floor-store');
    Route::post('floor-delete/{id}', [FrontOfficeControllr::class, 'floorDelete'])->name('floor-delete');
    Route::post('floor-update/{id}', [FrontOfficeControllr::class, 'floorUpdate'])->name('floor-update');
    Route::post('floor-fetch', [FrontOfficeControllr::class, 'floorFetch'])->name('floor-fetch');
    Route::post('floor/{id}', [FrontOfficeControllr::class, 'floorId'])->name('floor-fetch');

    // bed
    Route::post('bed-store', [FrontOfficeControllr::class, 'bedStore'])->name('bed-store');
    Route::post('bed-delete/{id}', [FrontOfficeControllr::class, 'bedDelete'])->name('bed-delete');
    Route::post('bed-update/{id}', [FrontOfficeControllr::class, 'bedUpdate'])->name('bed-update');
    Route::post('bed-fetch', [FrontOfficeControllr::class, 'bedFetch'])->name('bed-fetch');
    Route::post('bed/{id}', [FrontOfficeControllr::class, 'bedId'])->name('bed-fetch');

    // bedtype
    Route::post('bedtype-store', [FrontOfficeControllr::class, 'bedtypeStore'])->name('bedtype-store');
    Route::post('bedtype-delete/{id}', [FrontOfficeControllr::class, 'bedtypeDelete'])->name('bedtype-delete');
    Route::post('bedtype-update/{id}', [FrontOfficeControllr::class, 'bedtypeUpdate'])->name('bedtype-update');
    Route::post('bedtype-fetch', [FrontOfficeControllr::class, 'bedtypeFetch'])->name('bedtype-fetch');
    Route::post('bedtype/{id}', [FrontOfficeControllr::class, 'bedtypeId'])->name('bedtype-fetch');

    // bedlist api call
    Route::post('bedlist-store', [FrontOfficeControllr::class, 'bedlistStore'])->name('bedlist-store');
    Route::post('bedlist-delete/{id}', [FrontOfficeControllr::class, 'bedlistDelete'])->name('bedlist-delete');
    Route::post('bedlist-update/{id}', [FrontOfficeControllr::class, 'bedlistUpdate'])->name('bedlist-update');
    Route::post('bedlist-fetch', [FrontOfficeControllr::class, 'bedlistFetch'])->name('bedlist-fetch');
    Route::post('bedlist/{id}', [FrontOfficeControllr::class, 'bedlistId'])->name('bedlist-fetch');

    // financeincomeHead
    Route::post('financeincomeHead-store', [FinanceController::class, 'financeincomeHeadStore'])->name('financeincomeHead-store');
    Route::post('financeincomeHead-delete/{id}', [FinanceController::class, 'financeincomeHeadDelete'])->name('financeincomeHead-delete');
    Route::post('financeincomeHead-update/{id}', [FinanceController::class, 'financeincomeHeadUpdate'])->name('financeincomeHead-update');
    Route::post('financeincomeHead-fetch', [FinanceController::class, 'financeincomeHeadFetch'])->name('financeincomeHead-fetch');
    Route::post('financeincomeHead/{id}', [FinanceController::class, 'financeincomeHeadId'])->name('financeincomeHead-fetch');

    // financeExpenceHead
    Route::post('financeExpenceHead-store', [FinanceController::class, 'financeExpenceHeadStore'])->name('financeExpenceHead-store');
    Route::post('financeExpenceHead-delete/{id}', [FinanceController::class, 'financeExpenceHeadDelete'])->name('financeExpenceHead-delete');
    Route::post('financeExpenceHead-update/{id}', [FinanceController::class, 'financeExpenceHeadUpdate'])->name('financeExpenceHead-update');
    Route::post('financeExpenceHead-fetch', [FinanceController::class, 'financeExpenceHeadFetch'])->name('financeExpenceHead-fetch');
    Route::post('financeExpenceHead/{id}', [FinanceController::class, 'financeExpenceHeadId'])->name('financeExpenceHead-fetch');

    // symtoms api call
    Route::post('symtoms-store', [SetupController::class, 'symtomsStore'])->name('symtoms-store');
    Route::post('symtoms-delete/{id}', [SetupController::class, 'symtomsDelete'])->name('symtoms-delete');
    Route::post('symtoms-update/{id}', [SetupController::class, 'symtomsUpdate'])->name('symtoms-update');
    Route::post('symtoms-fetch', [SetupController::class, 'symtomsFetch'])->name('symtoms-fetch');
    Route::post('symtoms/{id}', [SetupController::class, 'symtomsId'])->name('symtoms-fetch');

    // symtomsHead
    Route::post('symtomsHead-store', [SetupController::class, 'symtomsHeadStore'])->name('symtomsHead-store');
    Route::post('symtomsHead-delete/{id}', [SetupController::class, 'symtomsHeadDelete'])->name('symtomsHead-delete');
    Route::post('symtomsHead-update/{id}', [SetupController::class, 'symtomsHeadUpdate'])->name('symtomsHead-update');
    Route::post('symtomsHead-fetch', [SetupController::class, 'symtomsHeadFetch'])->name('symtomsHead-fetch');
    Route::post('symtomsHead/{id}', [SetupController::class, 'symtomsHeadId'])->name('symtomsHead-fetch');

    // humanresourceLeavessetup api call
    Route::post('humanresourceLeavessetup-store', [HumanResourceController::class, 'humanresourceLeavessetupStore'])->name('humanresourceLeavessetup-store');
    Route::post('humanresourceLeavessetup-delete/{id}', [HumanResourceController::class, 'humanresourceLeavessetupDelete'])->name('humanresourceLeavessetup-delete');
    Route::post('humanresourceLeavessetup-update/{id}', [HumanResourceController::class, 'humanresourceLeavessetupUpdate'])->name('humanresourceLeavessetup-update');
    Route::post('humanresourceLeavessetup-fetch', [HumanResourceController::class, 'humanresourceLeavessetupFetch'])->name('humanresourceLeavessetup-fetch');
    Route::post('humanresourceLeavessetup/{id}', [HumanResourceController::class, 'humanresourceLeavessetupId'])->name('humanresourceLeavessetup-fetch');

    // humanRecourceDepartment api call
    Route::post('humanRecourceDepartment-store', [HumanResourceController::class, 'humanRecourceDepartmentStore'])->name('humanRecourceDepartment-store');
    Route::post('humanRecourceDepartment-delete/{id}', [HumanResourceController::class, 'humanRecourceDepartmentDelete'])->name('humanRecourceDepartment-delete');
    Route::post('humanRecourceDepartment-update/{id}', [HumanResourceController::class, 'humanRecourceDepartmentUpdate'])->name('humanRecourceDepartment-update');
    Route::post('humanRecourceDepartment-fetch', [HumanResourceController::class, 'humanRecourceDepartmentFetch'])->name('humanRecourceDepartment-fetch');
    Route::post('humanRecourceDepartment/{id}', [HumanResourceController::class, 'humanRecourceDepartmentId'])->name('humanRecourceDepartment-fetch');

    // humanResourceDesingation
    Route::post('humanResourceDesingation-store', [HumanResourceController::class, 'humanResourceDesingationStore'])->name('humanResourceDesingation-store');
    Route::post('humanResourceDesingation-delete/{id}', [HumanResourceController::class, 'humanResourceDesingationDelete'])->name('humanResourceDesingation-delete');
    Route::post('humanResourceDesingation-update/{id}', [HumanResourceController::class, 'humanResourceDesingationUpdate'])->name('humanResourceDesingation-update');
    Route::post('humanResourceDesingation-fetch', [HumanResourceController::class, 'humanResourceDesingationFetch'])->name('humanResourceDesingation-fetch');
    Route::post('humanResourceDesingation/{id}', [HumanResourceController::class, 'humanResourceDesingationId'])->name('humanResourceDesingation-fetch');

    // humanrecourceSpecilist
    Route::post('humanrecourceSpecilist-store', [HumanResourceController::class, 'humanrecourceSpecilistStore'])->name('humanrecourceSpecilist-store');
    Route::post('humanrecourceSpecilist-delete/{id}', [HumanResourceController::class, 'humanrecourceSpecilistDelete'])->name('humanrecourceSpecilist-delete');
    Route::post('humanrecourceSpecilist-update/{id}', [HumanResourceController::class, 'humanrecourceSpecilistUpdate'])->name('humanrecourceSpecilist-update');
    Route::post('humanrecourceSpecilist-fetch', [HumanResourceController::class, 'humanrecourceSpecilistFetch'])->name('humanrecourceSpecilist-fetch');

    // inventorycategory
    Route::post('inventorycategory-store', [InventoryController::class, 'inventorycategoryStore'])->name('inventorycategory-store');
    Route::post('inventorycategory-delete/{id}', [InventoryController::class, 'inventorycategoryDelete'])->name('inventorycategory-delete');
    Route::post('inventorycategory-update/{id}', [InventoryController::class, 'inventorycategoryUpdate'])->name('inventorycategory-update');
    Route::post('inventorycategory-fetch', [InventoryController::class, 'inventorycategoryFetch'])->name('inventorycategory-fetch');
    Route::post('inventorycategory/{id}', [InventoryController::class, 'inventorycategoryId'])->name('inventorycategory-fetch');

    // inventoryStore
    Route::post('inventoryStore-store', [InventoryController::class, 'inventoryStoreStore'])->name('inventoryStore-store');
    Route::post('inventoryStore-delete/{id}', [InventoryController::class, 'inventoryStoreDelete'])->name('inventoryStore-delete');
    Route::post('inventoryStore-update/{id}', [InventoryController::class, 'inventoryStoreUpdate'])->name('inventoryStore-update');
    Route::post('inventoryStore-fetch', [InventoryController::class, 'inventoryStoreFetch'])->name('inventoryStore-fetch');
    Route::post('inventoryStore/{id}', [InventoryController::class, 'inventoryStoreId'])->name('inventoryStore-fetch');

    // InventorySupplier
    Route::post('InventorySupplier-store', [InventoryController::class, 'InventorySupplierStore'])->name('InventorySupplier-store');
    Route::post('InventorySupplier-delete/{id}', [InventoryController::class, 'InventorySupplierDelete'])->name('InventorySupplier-delete');
    Route::post('InventorySupplier-update/{id}', [InventoryController::class, 'InventorySupplierUpdate'])->name('InventorySupplier-update');
    Route::post('InventorySupplier-fetch', [InventoryController::class, 'InventorySupplierFetch'])->name('InventorySupplier-fetch');
    Route::post('InventorySupplier/{id}', [InventoryController::class, 'InventorySupplierId'])->name('InventorySupplier-fetch');

    // ReferralCategory
    Route::post('ReferralCategory-store', [ReferalController::class, 'ReferralCategoryStore'])->name('ReferralCategory-store');
    Route::post('ReferralCategory-delete/{id}', [ReferalController::class, 'ReferralCategoryDelete'])->name('ReferralCategory-delete');
    Route::post('ReferralCategory-update/{id}', [ReferalController::class, 'ReferralCategoryUpdate'])->name('ReferralCategory-update');
    Route::post('ReferralCategory-fetch', [ReferalController::class, 'ReferralCategoryFetch'])->name('ReferralCategory-fetch');
    Route::post('ReferralCategory/{id}', [ReferalController::class, 'ReferralCategoryId'])->name('ReferralCategory-fetch');

    // referralCommissioon
    Route::post('referralcommission-store', [ReferalController::class, 'referralCommissionStore'])->name('referralcommission-store');
    Route::post('referralCommission-delete/{id}', [ReferalController::class, 'referralCommissionDelete'])->name('referralCommission-delete');
    Route::post('referralCommission-update/{id}', [ReferalController::class, 'referralCommissionUpdate'])->name('referralCommission-update');
    Route::post('referralCommission-fetch', [ReferalController::class, 'referralCommissionFetch'])->name('referralCommission-fetch');
    Route::post('referralCommission/{id}', [ReferalController::class, 'referralCommissionId'])->name('referralCommission-fetch');
    Route::post('patient-import', [PatientController::class, 'importpatient'])->name('referralCommission-fetch');

    // appoinmentGlobalStaff api call
    Route::post('appoinmentGlobalStaff-store', [AppoinmentController::class, 'appoinmentGlobalStaffStore'])->name('appoinmentGlobalStaff-store');
    Route::post('appoinmentGlobalStaff-delete/{id}', [AppoinmentController::class, 'appoinmentGlobalStaffDelete'])->name('appoinmentGlobalStaff-delete');
    Route::post('appoinmentGlobalStaff-update/{id}', [AppoinmentController::class, 'appoinmentGlobalStaffUpdate'])->name('appoinmentGlobalStaff-update');
    Route::post('appoinmentGlobalStaff-fetch', [AppoinmentController::class, 'appoinmentGlobalStaffFetch'])->name('appoinmentGlobalStaff-fetch');
    Route::post('appoinmentGlobalStaff/{id}', [AppoinmentController::class, 'appoinmentGlobalStaffId'])->name('appoinmentGlobalStaff-fetch');

    // appoinmentDoctorShift api call
    Route::post('appoinmentDoctorShift-store', [AppoinmentController::class, 'appoinmentDoctorShiftStore'])->name('appoinmentDoctorShift-store');
    Route::post('appoinmentDoctorShift-delete/{id}', [AppoinmentController::class, 'appoinmentDoctorShiftDelete'])->name('appoinmentDoctorShift-delete');
    Route::post('appoinmentDoctorShift-update/{id}', [AppoinmentController::class, 'appoinmentDoctorShiftUpdate'])->name('appoinmentDoctorShift-update');
    Route::post('appoinmentDoctorShift-fetch', [AppoinmentController::class, 'appoinmentDoctorShiftFetch'])->name('appoinmentDoctorShift-fetch');

    //appoinmentSlots api all 
    Route::post('appoinmentSlots-store', [AppoinmentController::class, 'appoinmentSlotsStore'])->name('appoinmentSlots-store');
    Route::post('appoinmentSlots-delete/{id}', [AppoinmentController::class, 'appoinmentSlotsDelete'])->name('appoinmentSlots-delete');
    Route::post('appoinmentSlots-update/{id}', [AppoinmentController::class, 'appoinmentSlotsUpdate'])->name('appoinmentSlots-update');
    Route::post('appoinmentSlots-fetch', [AppoinmentController::class, 'appoinmentSlotsFetch'])->name('appoinmentSlots-fetch');
    Route::post('appoinmentSlots/{id}', [AppoinmentController::class, 'appoinmentSlotsId'])->name('appoinmentSlots-fetch');
});
