<template>
    <div class="wrapper">
        log wrapper
    </div>
</template>

<script>

  export default {
    data() {
      return {
        config_event: this.$gameConfig.event
      }
    },
    methods: {
      show_log(text) {
        //文本自定义显示格式
        //{BIrbg:文本内容}
        //B  加粗
        //I  倾斜
        //r  红色
        //b  蓝色
        //g  绿色
      },
      //type
      //message   文本
      //event   文本+操作
      send_message_log(text) {
        this.show_log(text);
      },
      send_event_log(event_value) {
        if (config_event[event_value]) {
          return false;
        }
        return this.event_handle(config_event[event_value]);
      },
      event_handle(e_config) {
        //
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
