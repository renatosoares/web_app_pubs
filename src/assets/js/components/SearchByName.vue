<template>
    <form @submit="searchByName">
        <div class="form-group">
            <label for="formGroupExampleInput">Busca por nome</label>
            <input 
                type="text" 
                class="form-control" 
                id="formGroupExampleInput" 
                placeholder="Example input"
                name="name"
                v-model="searchName" >
        </div>
        <button 
            type="submit" 
            class="btn btn-primary">
            Sign in
        </button>
    </form>
</template>

<script src="./search_by_name.js"></script>

