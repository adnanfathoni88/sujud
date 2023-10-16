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
                    <button class="btn btn-primary mt-4 w-100" type="submit" name="submit_type"
                        value="add-produk">Simpan</button>
                </div>
            </div>

            <div class="col-md-6">
                <div class="container-sub">
                    <h6>Varian</h6>
                    <div class="varian">
                        <div class="d-flex">
                            <!-- ukuran -->
                            <select class="form-control" id="pilihan" onchange="handleDropdownChange(this.value)">
                                <option value="input">-- ukuran--</option>
                                <option value="input">Input</option>
                                @foreach ($ukuran as $u)
                                <option value="{{$u->id}}">{{$u['nama']}}</option>
                                @endforeach
                            </select>
                            <!-- warna -->
                            <select class="form-control mx-1" id="pilihan" onchange="handleDropdownChange(this.value)">
                                <option value="input">-- warna --</option>
                                <option value="input">Input</option>
                                @foreach ($warna as $w)
                                <option value="{{$w->id}}">{{$w->nama}}</option>
                                @endforeach
                            </select>
                            <input type="text" name="stok[]" class="form-control" placeholder="stok">
                            <button type="button" class="btn btn-success mx-1" id="addUkuran">+</button>
                        </div>
                    </div>

                    <div id="dynamic-inputs-ukuran"></div>

                    <div class="mt-2" id="inputField" style="display: none;">
                        <label for="inputValue">Masukkan Nilai:</label>
                        <input type="text" id="inputValue" class="form-control">
                    </div>
                </div>
            </div>
        </div>
    </form>
</div>
@endsection