@extends('layouts.main') @section('content')
<div class="container-fluid">
    <h2>Edit Pesanan</h2>
</div>
<div class="container-fluid ">
    <form action="/edit-pesanan/{{ $pesanan['id'] }}" method="post">
        @csrf
        <div class=" form-outline">
            <input type="text" id="form12" class="form-control @error('kode') is-invalid @enderror" name="kode"
                value="{{ $pesanan['kode'] }}" />
            <label class="form-label" for="form12">kode</label>
            @error('kode')
            <div class="invalid-feedback">
                {{ $message }}
            </div>
            @enderror
        </div>
        <div class="form-outline">
            <input type="date" id="form12" class="form-control @error('tgl_pesan') is-invalid @enderror"
                name="tgl_pesan" value="{{ $pesanan['tgl_pesan'] }}" />
            <label class=" form-label" for="form12">Tanggal pesan</label>
            @error('tgl_pesan')
            <div class="invalid-feedback">
                {{ $message }}
            </div>
            @enderror
        </div>
        <div class="form-outline">
            <input type="text" id="form12" class="form-control @error('status_bayar') is-invalid @enderror"
                name=" status_bayar" value="{{ $pesanan['status_bayar'] }}" />
            <label class="form-label" for="form12">Status Bayar</label>
            @error('status_bayar')
            <div class="invalid-feedback">
                {{ $message }}
            </div>
            @enderror
        </div>
        <div class="form-outline">
            <input type="text" id="form12" class="form-control @error('status_kirim') is-invalid @enderror"
                name="status_kirim" value="{{ $pesanan['status_kirim'] }}" />
            <label class="form-label" for="form12">Status Kirim</label>
            @error('status_kirim')
            <div class="invalid-feedback">
                {{ $message }}
            </div>
            @enderror
        </div>
        <div class="form-outline">
            <input type="text" id="form12" class="form-control @error('total') is-invalid @enderror" name="total"
                value="{{ $pesanan['total'] }}" />
            <label class="form-label" for="form12">Total</label>
            @error('total')
            <div class="invalid-feedback">
                {{ $message }}
            </div>
            @enderror
        </div>
        <div class="form-outline">
            <input type="text" id="form12" class="form-control @error('alamat') is-invalid @enderror" name="alamat"
                value="{{ $pesanan['alamat'] }}" />
            <label class="form-label" for="form12">Alamat</label>
            @error('alamat')
            <div class="invalid-feedback">
                {{ $message }}
            </div>
            @enderror
        </div>

        <div class="form-kategori">
            <select name="produk_id" id="produk_id"
                class="form-control form-control @error('produk_id') is-invalid @enderror">
                <option value="{{ $pesanan->produk['id'] }}">{{ $pesanan->produk['nama'] }}</option>
                @foreach ($produk as $p)
                <option value="{{$p->id}}">{{$p->nama}}</option>
                @endforeach
            </select>
            <!-- notif error -->
            @error('produk_id')
            <div class="invalid-feedback">
                {{ $message }}
            </div>
            @enderror
        </div>

        <div class="form-kategori">
            <select name="user_id" id="user_id"
                class="form-control form-control @error('user_id') is-invalid @enderror">
                <option value="{{ $pesanan->user['id'] }}">{{ $pesanan->user['nama'] }}</option>
                @foreach ($user as $u)
                <option value="{{$u->id}}">{{$u->nama}}</option>
                @endforeach
            </select>
            <!-- notif error -->
            @error('user_id')
            <div class="invalid-feedback">
                {{ $message }}
            </div>
            @enderror
        </div>

        <button class="btn btn-primary mt-4" type="submit">Simpan</button>
    </form>
</div>
@endsection