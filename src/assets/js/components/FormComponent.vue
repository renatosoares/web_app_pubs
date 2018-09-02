<template>
    <form>
        <div class="form-row">
            <div class="form-group col-md-6">
                <label for="inputName4">Name</label>
                <input type="text" class="form-control" id="inputName4" placeholder="Name" name="name">
            </div>
            
        </div>
        
        <div class="form-row">
            <div class="form-group col-md-6">
                <label for="inputCity">City</label>
                <input type="text" class="form-control" id="inputCity" name="city">
            </div>
            <div class="form-group col-md-4">
                <label for="inputState">State</label>
                <select id="inputState" class="form-control" name="state">
                    <option selected>Choose...</option>
                    <option value="rn">RN</option>
                    <option value="pb">PB</option>
                    <option value="ce">CE</option>
                </select>
            </div>
            <div class="form-group col-md-6">
                <label for="inputCountry">Country</label>
                <input type="text" class="form-control" id="inputCountry" name="country">
            </div>
        </div>

        <button type="submit" class="btn btn-primary">Sign in</button>
    </form>
</template>

<script>
export default {
  mounted() {
    console.log("Component mounted.");
  }
};
</script>
