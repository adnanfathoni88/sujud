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

                    <!-- harga -->
                    <div class="row">
                        <div class="col-6">
                            <div class="form-outline">
                                <input type="text" id="form12"
                                    class="form-control @error('harga_produk') is-invalid @enderror" name="harga_produk"
                                    value="{{ old('harga_produk') }}" />
                                <label class="form-label" for="form12">Harga Produk</label>
                                @error('harga_produk')
                                <div class="invalid-feedback">
                                    {{ $message }}
                                </div>
                                @enderror
                            </div>
                        </div>

                        <div class="col-6">
                            <div class="form-outline">
                                <input type="text" id="form12"
                                    class="form-control @error('harga_diskon') is-invalid @enderror" name="harga_diskon"
                                    value="{{ old('harga_diskon') }}" />
                                <label class="form-label" for="form12">Harga Diskon</label>
                                @error('harga_diskon')
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
                        <button class="btn btn-primary mt-4 w-100" type="submit" name="submit_type"
                            value="add-produk">Simpan</button>
                    </div>
                </div>
            </div>

            <div class="col-md-6">
                <div class="container-sub">
                    <!-- ukuran -->
                    <div class="ukuran">
                        <label for="ukuran">Ukuran</label>
                        <div class="d-flex">
                            <input type="text" name="ukuran[]" class="form-control" placeholder="nama variasi">
                            <button type="button" class="btn btn-success mx-1" id="addUkuran">+</button>
                        </div>
                    </div>

                    <div id="dynamic-inputs-ukuran"></div>

                    <!-- warna -->
                    <div class="warna mt-4">
                        <label for="warna">Warna</label>
                        <div class="d-flex ">
                            <input type="text" name="warna[]" class="form-control" placeholder="nama variasi">
                            <button type="button" class="btn btn-success mx-1" id="addWarna">+</button>
                        </div>
                    </div>

                    <div id="dynamic-inputs-warna"></div>

                    <!-- deskripsi -->
                    <div class="mt-4">
                        <label for="">Deskripsi</label>
                        <textarea class="form-control @error('deskripsi') is-invalid @enderror" name="deskripsi"
                            id="deskripsi">{{ old('deskripsi') }}</textarea>
                        @error('deskripsi')
                        <div class="invalid-feedback">
                            {{ $message }}
                        </div>
                        @enderror
                    </div>
                </div>
            </div>

            a 
        </div>
    </form>
</div>
@endsection