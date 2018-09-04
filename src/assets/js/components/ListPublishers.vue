<template>
    <div class="table-responsive">
        <table class="table table-hover">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Nome</th>
                    <th scope="col">Cidade</th>
                    <th scope="col">Estado</th>
                    <th scope="col">País</th>
                    <th scope="col">Atualizar</th>
                    <th scope="col">Apagar</th>
                </tr>
            </thead>
            <tbody>
                <tr 
                    v-for="pub in pubs"
                    :key="pub.id">
                    <th scope="row">{{ pub.id }}</th>
                    <td>{{ pub.name }}</td>
                    <td>{{ pub.city }}</td>
                    <td>{{ pub.state }}</td>
                    <td>{{ pub.country }}</td>
                    <td><a href="http://">up</a></td>
                    <td><a href="http://">del</a></td>

                </tr>
            </tbody>
        </table>
    </div>
</template>

<script src="./list_publishers.js"></script>

