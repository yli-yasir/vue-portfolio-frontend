<template>
            <div class="d-flex flex-row-reverse">
          <small>
            <b>Occured: {{originDate}}</b>
            &nbsp;&nbsp;&nbsp;&nbsp;
            Posted: {{createdAt}}
            &nbsp;&nbsp;&nbsp;&nbsp;
            Last Edit: {{updatedAt}}
            &nbsp;&nbsp;&nbsp;&nbsp;
            </small>
        </div>
</template>

<script>
export default {
    props: {
        createdAt:String,
        updatedAt: String,
        originDate: String
    }

}
</script>
