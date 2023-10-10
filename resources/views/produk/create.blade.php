@extends('layouts.main') @section('content')
<div class="container-fluid">
    <h2>Tambah Produk</h2>
</div>
<div class="container ">
    <form action="/add-produk" method="post" enctype="multipart/form-data">
        @csrf
        <div class="row">
            <div class="col-md-6">
                <div class="container-sub">
                    <div class="form-outline">
                        <input type="text" id="form12" class="form-control @error('nama') is-invalid @enderror"
                            name="nama" value="{{ old('nama') }}" />
                        <label class=" form-label" for="form12">nama</label>
                        @error('nama')
                        <div class="invalid-feedback">
                            {{ $message }}
                        </div>
                        @enderror
                    </div>
                    <!-- <div class="form-outline">
            <input type="text" id="form12" class="form-control @error('deskripsi') is-invalid @enderror"
                name=" deskripsi" value="{{ old('deskripsi') }}" />
            <label class="form-label" for="form12">deskripsi</label>
            @error('deskripsi')
            <div class="invalid-feedback">
                {{ $message }}
            </div>
            @enderror
        </div> -->

                    <!-- harga -->
                    <div class="row">

                        <div class="col-6">
                            <div class="form-outline">
                                <input type="text" id="form12" class="form-control @error('harga') is-invalid @enderror"
                                    name="harga" value="{{ old('harga') }}" />
                                <label class="form-label" for="form12">Harga Produk</label>
                                @error('harga')
                                <div class="invalid-feedback">
                                    {{ $message }}
                                </div>
                                @enderror
                            </div>
                        </div>

                        <div class="col-6">
                            <div class="form-outline">
                                <input type="text" id="form12" class="form-control @error('harga') is-invalid @enderror"
                                    name="harga" value="{{ old('harga') }}" />
                                <label class="form-label" for="form12">Harga Diskon</label>
                                @error('harga')
                                <div class="invalid-feedback">
                                    {{ $message }}
                                </div>
                                @enderror
                            </div>
                        </div>

                    </div>

                    <div class="form-outline">
                        <input type="text" id="" class="form-control @error('stok') is-invalid @enderror" name="stok"
                            value="{{ old('stok') }}" />
                        <label class="form-label" for="form12">stok</label>
                        @error('stok')
                        <div class="invalid-feedback">
                            {{ $message }}
                        </div>
                        @enderror
                    </div>

                    <div class="form-file">
                        <input class="form-control form-control @error('gambar') is-invalid @enderror" type="file"
                            id="formFileLg" name="gambar[]" multiple />
                        @error('gambar')
                        <div class="invalid-feedback">
                            {{ $message }}
                        </div>
                        @enderror
                    </div>
                    <div class="form-kategori">
                        <select name="kategori_id" id="kategori_id"
                            class="form-control form-control @error('kategori_id') is-invalid @enderror">
                            <option value="">-- kategori --</option>
                            @foreach ($kategori as $k)
                            <option value="{{$k->id}}">{{$k->nama}}</option>
                            @endforeach
                        </select>
                        <!-- notif error -->
                        @error('kategori_id')
                        <div class="invalid-feedback">
                            {{ $message }}
                        </div>
                        @enderror
                    </div>
                </div>
            </div>
            <div class="col-md-6">
                <div class="container-sub">
                    <!-- ukuran -->
                    <div class="ukuran">
                        <div class="header-input">
                            <label for="">Ukuran</label>
                            <div class="d-flex">
                                <input type="text" class="form-control">
                                <button class="btn btn-success mx-1">+</button>
                            </div>
                        </div>
                    </div>
                    <div class="warna">
                        <div class="header-input">
                            <label for="">Ukuran</label>
                            <div class="d-flex">
                                <input type="text" class="form-control">
                                <button class="btn btn-success mx-1">+</button>
                            </div>
                        </div>
                    </div>
                    <div class="deskripsi">
                        <div class="header-input">
                            <label for="">Deskripsi</label>
                            <div class="d-flex">
                                <textarea type="text" class="form-control"></textarea>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
        <button class="btn btn-primary mt-4" type="submit">Simpan</button>
    </form>
</div>
@endsection