@extends('layouts.main') @section('content')
<div class="container-fluid">
    <h2>Reply Ulasan</h2>
</div>
<div class="container-fluid">
    <table class="table table-bordered">
        <tr>
            <td>Tanggal</td>
            <td>{{ $ulasan['tgl_ulasan'] }}</td>
        </tr>
        <tr>
            <td>Nama</td>
            <td>{{ $ulasan->user['nama'] }}</td>
        </tr>
        <tr>
            <td>Prooduk</td>
            <td>{{ $ulasan->produk['nama'] }}</td>
        </tr>
        <tr>
            <td>koten</td>
            <td>
                @for($i = 0; $i < $ulasan['rating']; $i++) <i class="fas fa-star"></i>@endfor <br>
                    {{ $ulasan['konten'] }}
            </td>
        </tr>
    </table>
    {{--
    {{$ulasan->balasan[0]['id'] }} -
    {{$ulasan->balasan[0]->user['nama'] }} --}}

    <div class="px-3">
        <h4>Balas Ulasan</h4>
        @if(count($ulasan->balasan) > 0)
        @foreach ($ulasan->balasan as $u )
        <form class="my-3" action="/edit-ulasan/{{ $ulasan->balasan[0]['id'] }}" method="POST">
            @csrf
            <div class="form-outline">
                <textarea class="form-control" id="textAreaExample" rows="4" name="konten">{{ $u->konten }}</textarea>
                <label class="form-label" for="konten">Message</label>
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
            <a class="btn btn-danger" href="/delete-ulasan/{{ $ulasan->balasan[0]['id'] }}"
                onclick="return confirm ('Hapus balasan dari {{ $ulasan->balasan[0]->user['nama'] }}')">Delete</a>
        </form>
        @endforeach
        XXX
        @else
        <form action="/reply-ulasan/{{ $ulasan['id'] }}" method="POST">
            @csrf
            <div class="form-outline">
                <textarea class="form-control" id="textAreaExample" rows="4" name="konten"></textarea>
                <label class="form-label" for="konten">Message</label>
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
        </form>
        @endif
    </div>
</div>
@endsection