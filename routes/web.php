<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AngularAdminController;
use App\Http\Controllers\AngularPortalController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/
/*
Route::get('/', function () {
    return view('welcome');
});
*/
Route::any('/{any}', [AngularPortalController::class, 'index'])->where('any', '^(?!api).*$');
Route::any('/admin/**', [AngularAdminController::class, 'index']);
