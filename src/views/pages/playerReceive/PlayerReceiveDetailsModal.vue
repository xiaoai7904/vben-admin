<template>
  <BasicModal v-bind="$attrs" @register="registerModal" :title="getTitle" @ok="handleSubmit">
    <data>11</data>
  </BasicModal>
</template>
<script lang="ts">
  import { defineComponent, ref, computed, unref } from 'vue';
  import { BasicModal, useModalInner } from '/@/components/Modal';
  export default defineComponent({
    name: 'ReceiveDetailsModal',
    components: { BasicModal },
    emits: ['success', 'register'],
    setup(_, { emit }) {
      const isUpdate = ref(true);
      const rowId = ref('');

      const [registerModal, { setModalProps, closeModal }] = useModalInner(async (data) => {
        setModalProps({ confirmLoading: false });
        isUpdate.value = !!data?.isUpdate;

        if (unref(isUpdate)) {
          rowId.value = data.record.id;
        }
      });

      const getTitle = computed(() => (!unref(isUpdate) ? '新增USDT钱包' : '编辑USDT钱包'));

      async function handleSubmit() {
        try {
          closeModal();
          emit('success', { isUpdate: unref(isUpdate), values: {} });
        } finally {
          setModalProps({ confirmLoading: false });
        }
      }

      return { registerModal, getTitle, handleSubmit };
    },
  });
</script>
