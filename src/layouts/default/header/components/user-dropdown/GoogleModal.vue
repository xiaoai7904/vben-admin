<template>
  <BasicModal v-bind="$attrs" @register="registerModal" :title="getTitle" @ok="handleSubmit">
    <BasicForm @register="registerForm" />
  </BasicModal>
</template>
<script lang="ts">
  import { h, defineComponent, ref, computed } from 'vue';
  import { BasicModal, useModalInner } from '/@/components/Modal';
  import { QrCode } from '/@/components/Qrcode';
  import { BasicForm, useForm } from '/@/components/Form/index';
  import { BindGoogleApi, CreateGoogleQrApi } from '/@/api/page';

  export default defineComponent({
    name: 'BindGoogleModal',
    components: { BasicModal, BasicForm },
    emits: ['register'],
    setup() {
      const rowId = ref('');
      const [registerForm, { setFieldsValue, resetFields, validate }] = useForm({
        labelWidth: 100,
        baseColProps: { span: 24 },
        schemas: [
          {
            field: 'secret',
            label: '验证码秘钥',
            component: 'Input',
            rules: [
              {
                required: true,
                message: '请输入名称',
              },
            ],
          },
          {
            field: 'qr_url',
            label: '二维码',
            component: 'Input',
            render: ({ model, field }) => {
              return h(QrCode, {
                value: model[field],
              });
            },
          },
          {
            field: 'code',
            label: '验证码',
            component: 'Input',
            rules: [
              {
                required: true,
                message: '请输入验证码',
              },
            ],
          },
        ],
        showActionButtonGroup: false,
        actionColOptions: {
          span: 23,
        },
      });

      const [registerModal, { setModalProps, closeModal }] = useModalInner(async (data) => {
        resetFields();
        setModalProps({ confirmLoading: false });

        const googleResult = await CreateGoogleQrApi({});
        setFieldsValue({
          ...data.record,
          ...{
            qr_url: googleResult.qr_url,
            secret: googleResult.secret,
          },
        });
      });

      const getTitle = computed(() => '绑定/更新Google验证码');

      async function handleSubmit() {
        try {
          const values = await validate();
          setModalProps({ confirmLoading: true });
          // TODO custom api
          console.log(values);
          if (Array.isArray(values.image)) {
            values.image = values.image[0];
          }

          await BindGoogleApi({ ...values, walletId: rowId.value });

          closeModal();
        } finally {
          setModalProps({ confirmLoading: false });
        }
      }

      return { registerModal, registerForm, getTitle, handleSubmit };
    },
  });
</script>
