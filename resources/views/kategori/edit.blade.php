<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Kategori | edit</title>
    <!-- MDB -->
    <link href="https://cdnjs.cloudflare.com/ajax/libs/mdb-ui-kit/6.4.1/mdb.min.css" rel="stylesheet" />
</head>

<body>
    <div class="container mt-4">
        <h2>Edit Kategori</h2>
        <form action="/update-kategori/{{ $kategori['id'] }}" method="post">
            @csrf
            @method('PUT')
            <div class="form-outline">
                <input type="text" id="form12" class="form-control @error('nama') is-invalid @enderror" name="nama"
                    value="{{ $kategori['nama'] }}" />
                <label class="form-label" for="form12">Nama</label>
                @error('nama')
                <div class="invalid-feedback">
                    {{ $message }}
                </div>
                @enderror
            </div>
            <button type="submit" class="btn btn-primary mt-3">Edit</button>
        </form>
    </div>
    <!-- MDB -->
    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/mdb-ui-kit/6.4.1/mdb.min.js"></script>
</body>

</html>