
  /*
  https://ibb.co/fMCZYZN ==> Seg2 (Signature)
  https://ibb.co/wQMQ61c ==> Shickan long logo
  https://ibb.co/6bLm1km ==> logo
*/
const { createApp, ref } = Vue

createApp({
  setup() {
    const college = ref('$college')
    const collegeName = ref(''+college.value)
    const student = ref({
      name: '$name',
      u_no: '$u_no',
      level: '$level',
      batch: '$batch_name',
      picture: '$photo',
    });
    const topBarBgClass = ref({
      'front-card__top-bar--medicine-bg': false,
      'front-card__top-bar--nursing-bg': false,
      'front-card__top-bar--radiology-bg': false,
    })


    switch (college.value.trim()) {
      case 'الطب':
        collegeName.value = 'الطب والجراحة';
        topBarBgClass.value = {
          'front-card__top-bar--medicine-bg': true,
          'front-card__top-bar--nursing-bg': false,
          'front-card__top-bar--radiology-bg': false,
        }
        break;
      case 'التمريض':
        collegeName.value = 'علوم التمريض';
        topBarBgClass.value = {
          'front-card__top-bar--medicine-bg': false,
          'front-card__top-bar--nursing-bg': true,
          'front-card__top-bar--radiology-bg': false,
        }
        break;
      case 'الأشعة':
        collegeName.value = 'علوم الأشعة التشخيصية';
        topBarBgClass.value = {
          'front-card__top-bar--medicine-bg': false,
          'front-card__top-bar--nursing-bg': false,
          'front-card__top-bar--radiology-bg': true,
        }
        break;
      default:
        break;
    }


    return {
      college,
      collegeName,
      student,
      topBarBgClass,
      sigImage: 'data:image/webp;base64,' + IMAGE_SEG2_BASE64,
      logoImage: 'data:image/png;base64,' + IMAGE_LOGO_BASE64,
      shickanImage: 'data:image/png;base64,' + IMAGE_SHICKAN_BASE64,
    }
  }
}).mount('#app')
