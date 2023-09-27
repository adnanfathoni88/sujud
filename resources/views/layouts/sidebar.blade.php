<nav id="sidebarMenu" class="collapse d-lg-block sidebar collapse bg-white">
    <h3 class="mx-4">E-PERPUS</h3>
    <div class="position-sticky">

        <div class="list-group list-group-flush">
            <a href="/produk"
                class="side list-group-item list-group-item-action ripple {{ collect(explode('/', url()->current()))->pop() === 'produk' ? 'active' : ' ' }}"
                aria-current="true">
                <span>Produk</span>
            </a>
        </div>

        <div class="list-group list-group-flush">
            <a href="/kategori"
                class="side list-group-item list-group-item-action ripple {{ collect(explode('/', url()->current()))->pop() === 'kategori' ? 'active' : ' ' }}"
                aria-current="true">
                <span>Kategori</span>
            </a>
        </div>

        <div class="list-group list-group-flush">
            <a href="/logout" class="side list-group-item list-group-item-action ripple"
                onclick="return confirm('Anda Ingin Logout? ')" aria-current="true">
                <span>Logout</span>
            </a>
        </div>
    </div>
</nav>