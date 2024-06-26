@extends('layouts.main') @section('content')

<div class="container-fluid">
    <div class="row">
        <div class="col-9">
            <h2>Kategori</h2>
        </div>
    </div>
</div>

<div class="container-fluid">
    <a class="btn btn-primary" href="/add-kategori">Tambah</a>
    <div class="my-4">
        @if(session('error'))
        <div class="alert alert-danger">
            {{ session('error') }}
        </div>
        @endif

        @if(session('success'))
        <div class="alert alert-success">
            {{ session('success') }}
        </div>
        @endif

        @if(session('delete'))
        <div class="alert alert-danger">
            {{ session('delete') }}
        </div>
        @endif
    </div>
    <table id="table" class="table table-bordered table-hover" style="width: 100%;">
        <thead>
            <th>no</th>
            <th>Nama</th>
            <th>Aksi</th>
        </thead>
        <tbody>
            @foreach ($kategori as $k)
            <tr>
                <td>{{ $loop->iteration }}</td>
                <td>{{ $k['nama'] }}</td>
                <td class=" d-flex">
                    <a class="btn btn-warning mx-2" href="/edit-kategori/{{ $k['id'] }}"><i
                            class="far fa-pen-to-square"></i></a>
                    <form action="/delete-kategori/{{ $k['id'] }}" method="post">
                        @csrf
                        @method('DELETE')
                        <button class="btn btn-danger" type="submit"
                            onclick="return confirm('Hapus data {{ $k['nama'] }}')"><i
                                class=" far fa-trash-can"></i></button>
                    </form>

                </td>
            </tr>
            @endforeach
        </tbody>
    </table>
</div>


@endsection