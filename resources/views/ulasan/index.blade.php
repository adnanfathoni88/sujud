@extends('layouts.main') @section('content')
<div class="container-fluid">
    <h2>Ulasan</h2>
</div>
<div class="container-fluid">
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
            <th>Tanggal</th>
            <th>User</th>
            <th>Produk</th>
            <th>Konten</th>
            <th>Rating</th>
            <th>Aksi</th>
        </thead>
        <tbody>
            @foreach ($ulasan as $u)
            <tr>
                <td>{{ $loop->iteration }}</td>
                <td>{{ $u['tgl_ulasan'] }}</td>
                <td>{{ $u->user['nama'] }}</td>
                <td>{{ $u->produk['nama'] }}</td>
                <td>{{ $u['konten'] }}</td>
                <td>
                    @for($i = 0; $i < $u['rating']; $i++) <i class="fas fa-star"></i>@endfor
                </td>
                <td>
                    <a class="btn btn-primary" href="/reply-ulasan/{{ $u['id'] }}"><i
                            class="fa-regular fa-comment-dots"></i></a>
                    <a class="btn btn-danger" href="/delete-ulasan/{{ $u['id'] }}"
                        onclick="return confirm ('Hapus ulasan {{ $u->user['nama'] }}')"><i
                            class="far fa-trash-can"></i></a>
                </td>
            </tr>
            @endforeach
        </tbody>
    </table>
</div>
</div>
@endsection