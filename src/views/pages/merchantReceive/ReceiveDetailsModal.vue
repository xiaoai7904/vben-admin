<template>
  <BasicModal v-bind="$attrs" @register="registerModal" :title="getTitle" @ok="closeModal">
    <Description
      size="middle"
      :bordered="false"
      :column="2"
      :data="orderDetails"
      :schema="detailsSchema"
    />
  </BasicModal>
</template>
<script lang="ts">
  import { defineComponent, ref, computed } from 'vue';
  import { BasicModal, useModalInner } from '/@/components/Modal';
  import { Description } from '/@/components/Description/index';
  import { OrderDetailsApi } from '/@/api/page';
  import { detailsSchema, orderState, notifyState, opState } from './receive.data';
  export default defineComponent({
    name: 'ReceiveDetailsModal',
    components: { BasicModal, Description },
    setup(_) {
      const loading = ref(false);
      const orderDetails = ref<any>(null);

      const [registerModal, { setModalProps, closeModal }] = useModalInner(async (data) => {
        setModalProps({ confirmLoading: false, width: '70vw' });
        orderDetails.value = { ...data.record };
        try {
          loading.value = true;
          const result = await OrderDetailsApi({ pOrderId: data.record.pOrderId });
          Object.keys(result).forEach((item) => {
            if (item === 'orderState') {
              result[item] = orderState[result[item]];
            } else if (item === 'notifyState') {
              result[item] = notifyState[result[item]];
            } else if (item === 'op') {
              result[item] = opState[result[item]];
            }
          });

          orderDetails.value = { ...result };
        } catch (error) {
        } finally {
          loading.value = false;
        }
      });

      const getTitle = computed(() => `${orderDetails.value?.pOrderId} 订单详情`);

      return { registerModal, getTitle, orderDetails, detailsSchema, closeModal };
    },
  });
</script>
