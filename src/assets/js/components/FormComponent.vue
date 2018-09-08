<template>
    <form @submit.prevent="submited(url, typeMethod)">
        <div class="form-row">
            <div class="form-group col-md">
                <label for="inputName4">Name</label>
                <input type="text" class="form-control" id="inputName4" placeholder="Name" name="name" v-model="name">
            </div>

        </div>

        <div class="form-row">
            <div class="form-group col-md">
                <label for="inputCity">City</label>
                <input type="text" class="form-control" id="inputCity" name="city" v-model="city">
            </div>
            <div class="form-group col-md">
                <label for="inputState">State</label>
                <select id="inputState" class="form-control" name="state" v-model="state">
                    <option selected>Choose...</option>
                    <option value="rn">RN</option>
                    <option value="pb">PB</option>
                    <option value="ce">CE</option>
                </select>
            </div>
            <div class="form-group col-md">
                <label for="inputCountry">Country</label>
                <input type="text" class="form-control" id="inputCountry" name="country" v-model="country">
            </div>
        </div>

        <button type="submit" class="btn btn-primary">Sign in</button>
    </form>
</template>

<script src="./form.js"></script>
