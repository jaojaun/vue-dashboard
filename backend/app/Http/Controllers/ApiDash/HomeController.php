<?php

namespace App\Http\Controllers\ApiDash;

use App\Http\Controllers\Controller;
use App\Models\Models\Clientes;
use Illuminate\Http\Request;

class HomeController extends Controller
{
    public function index()
    {
        $clientes = Clientes::all();
        $produtos = [
            [
                'id' => 1,
                'name' => 'teclado',
                'valor' => '200'
            ]
        ];
        return response()->json([
            'clientes' => $clientes,
            'produtos' => $produtos,
        ]);
    }
}
