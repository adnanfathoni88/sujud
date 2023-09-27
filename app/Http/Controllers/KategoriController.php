<?php

namespace App\Http\Controllers;

use App\Models\Kategori;
use GuzzleHttp\Client;
use Illuminate\Routing\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;


class KategoriController extends Controller
{
    function index()
    {
        $client = new Client();
        $response = $client->request('GET', 'http://localhost:8000/api/kategori');
        $kategori = json_decode($response->getBody()->getContents(), true);
        $data = $kategori['kategori'];
        return view('kategori.index', compact('data'));
    }

    function index(){
        $kategori = Kategori::all();
        return view('kategori.index', compact('kategori')); 
    }

    function create()
    {
        return view('kategori.create');
    }

    function store(Request $request)
    {
        $request->validate([
            'nama' => 'required|unique:kategoris,nama'
        ]);

        $nama = $request->input('nama');
        $data = [
            'nama' => $nama
        ];
        $client = new Client();
        $response = $client->request('POST', 'http://localhost:8000/api/kategori', [
            'headers' => ['content-type' => 'application/json'],
            'json' => $data
        ]);
        $content = $response->getBody()->getContents();
        $data = json_decode($content, true);

        return redirect()->to('kategori')->with('success', 'Berhasil menambahkan kategori');
    }

    function edit($id)
    {
        $client = new Client();
        $response = $client->request('GET', 'http://localhost:8000/api/kategori/' . $id);
        $kategori = json_decode($response->getBody()->getContents(), true);
        $data = $kategori['kategori'];
        return view('kategori.edit', compact('data'));
    }

    function update(Request $request, $id)
    {
        $request->validate([
            'nama' => 'required'
        ]);

        $nama = $request->input('nama');
        $data = [
            'nama' => $nama
        ];

        $client = new Client();
        $response = $client->request('PUT', 'http://localhost:8000/api/kategori/' . $id, [
            'headers' => ['content-type' => 'application/json'],
            'json' => $data
        ]);
        $content = $response->getBody()->getContents();
        $data = json_decode($content, true);

        return redirect()->to('kategori')->with('success', 'Data ' . $nama . ' diperbarui');
    }
    function destroy($id)
    {
        $client = new Client();

        try {
            $response = $client->request('DELETE', 'http://localhost:8000/api/kategori/' . $id);
            $statusCode = $response->getStatusCode();
            $responseData = json_decode($response->getBody(), true);

            if ($statusCode == 200) {
                return redirect()->to('kategori')->with('success', 'Data berhasil dihapus');
            } elseif ($statusCode == 404) {
                return redirect()->to('kategori')->with('error', $responseData['message'] ?? 'Data tidak ditemukan');
            } elseif ($statusCode == 400) {
                return redirect()->to('kategori')->with('error', $responseData['message'] ?? 'Data tidak bisa dihapus karena masih ada produk yang terkait');
            } else {
                return redirect()->to('kategori')->with('error', 'Terjadi kesalahan');
            }
        } catch (\GuzzleHttp\Exception\ClientException $e) {
            $response = $e->getResponse();
            $statusCode = $response->getStatusCode();
            $responseData = json_decode($response->getBody(), true);

            return redirect()->to('kategori')->with('error', $responseData['message'] ?? 'Terjadi kesalahan');
        }
    }

    function cari(Request $request)
    {
        $cari = $request->input('cari');
        $data = Kategori::where('nama', 'like', "%" . $cari . "%")->paginate(5);

        return view('kategori.index', compact('data'));
    }
}
