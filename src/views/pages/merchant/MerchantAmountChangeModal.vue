<template>
  <BasicModal v-bind="$attrs" @register="registerModal" :title="getTitle" @ok="handleSubmit">
    <BasicForm @register="registerForm" />
  </BasicModal>
</template>
<script lang="ts">
  import { defineComponent, ref, computed, unref } from 'vue';
  import { BasicModal, useModalInner } from '/@/components/Modal';
  import { BasicForm, useForm } from '/@/components/Form/index';
  import { AmountModalFormSchema } from './merchant.data';
  import { RateMerchantApi, EditRateMerchantApi } from '/@/api/page';
  export default defineComponent({
    name: 'MerchanAmountChangeModal',
    components: { BasicModal, BasicForm },
    emits: ['success', 'register'],
    setup(_, { emit }) {
      const isUpdate = ref(true);
      const rowId = ref('');

      const [registerForm, { setFieldsValue, resetFields, validate }] = useForm({
        labelWidth: 150,
        baseColProps: { span: 24 },
        schemas: AmountModalFormSchema,
        showActionButtonGroup: false,
        actionColOptions: {
          span: 23,
        },
      });

      const [registerModal, { setModalProps, closeModal }] = useModalInner(async (data) => {
        resetFields();
        setModalProps({ confirmLoading: false });
        isUpdate.value = !!data?.isUpdate;
        const rateInfoResult = await RateMerchantApi({ accountId: data.record.id });

        console.log(rateInfoResult);

        rowId.value = data.record.id;
        setFieldsValue({
          ...data.record,
          ...rateInfoResult,
        });
      });

      const getTitle = computed(() => (!unref(isUpdate) ? '商户金额修改' : '商户金额修改'));

      async function handleSubmit() {
        try {
          const values = await validate();
          setModalProps({ confirmLoading: true });
          // TODO custom api
          console.log(values);
          await EditRateMerchantApi({ ...values, accountId: rowId.value });

          closeModal();
          emit('success', {
            isUpdate: unref(isUpdate),
            values: { ...values, accountId: rowId.value },
          });
        } finally {
          setModalProps({ confirmLoading: false });
        }
      }

      return { registerModal, registerForm, getTitle, handleSubmit };
    },
  });
</script>
