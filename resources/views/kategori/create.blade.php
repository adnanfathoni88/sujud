@extends('layouts.main') @section('content')
<div class="container-fluid mt-4">
    <h2>Tambah Kategori</h2>
    <form action="add-kategori" method="post">
        @csrf
        <div class="form-outline">
            <input type="text" id="form12" class="form-control @error('nama') is-invalid @enderror" name="nama" />
            <label class="form-label" for="form12">Nama</label>
            @error('nama')
            <div class="invalid-feedback">
                {{ $message }}
            </div>
            @enderror
        </div>
        <button type="submit" class="btn btn-primary mt-3">Tambah</button>
    </form>
</div>
@endsection