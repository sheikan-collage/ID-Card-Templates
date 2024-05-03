/*
  https://ibb.co/fMCZYZN ==> Seg2 (Signature)
  https://ibb.co/wQMQ61c ==> Shickan long logo
  https://ibb.co/6bLm1km ==> logo
*/
const { createApp, ref, watch } = Vue;

createApp({
  setup() {
    const validColleges = ref(["الطب", "التمريض", "الأشعة"]);
    const validBatches = ref(["2019", "2020", "2021", "2022"]);
    const validLevels = ref([
      "الأولى",
      "الثانية",
      "الثالثة",
      "الرابعة",
      "الخامسة",
    ]);
    const college = ref("-1"); // $college
    const collegeName = ref("" + college.value);
    const student = ref({
      name: "", // $name
      u_no: "", // $u_no
      level: "-1", // $level
      batch: "-1", //$batch_name
      picture: "", //$photo
    });
    const topBarBgClass = ref({
      "front-card__top-bar--medicine-bg": false,
      "front-card__top-bar--nursing-bg": false,
      "front-card__top-bar--radiology-bg": false,
    });

    function updateCollege() {
      switch (college.value.trim()) {
        case "الطب":
          collegeName.value = "الطب والجراحة";
          topBarBgClass.value = {
            "front-card__top-bar--medicine-bg": true,
            "front-card__top-bar--nursing-bg": false,
            "front-card__top-bar--radiology-bg": false,
          };
          break;
        case "التمريض":
          collegeName.value = "علوم التمريض";
          topBarBgClass.value = {
            "front-card__top-bar--medicine-bg": false,
            "front-card__top-bar--nursing-bg": true,
            "front-card__top-bar--radiology-bg": false,
          };
          break;
        case "الأشعة":
          collegeName.value = "علوم الأشعة التشخيصية";
          topBarBgClass.value = {
            "front-card__top-bar--medicine-bg": false,
            "front-card__top-bar--nursing-bg": false,
            "front-card__top-bar--radiology-bg": true,
          };
          break;
        default:
          collegeName.value = "";
          topBarBgClass.value = {
            "front-card__top-bar--medicine-bg": false,
            "front-card__top-bar--nursing-bg": false,
            "front-card__top-bar--radiology-bg": false,
          };
          break;
      }
    }

    watch(college, updateCollege);

    function onPhotoChange(e) {
      const file = e.target.files[0];
      student.value.picture = URL.createObjectURL(file);
    }

    document.addEventListener("keydown", (e) => {
      if (e.key == "p" && e.ctrlKey == true) {
        if (!validColleges.value.includes(college.value)) {
          issues.value.push("اختر الكلية");
        }

        if (student.value.name.trim() == "") {
          issues.value.push("ادخل اسم الطالب");
        }

        if (student.value.u_no.trim() == "") {
          issues.value.push("ادخل الرقم الجامعي");
        }

        if (!validBatches.value.includes(student.value.batch)) {
          issues.value.push("اختر الدفعة");
        }

        if (!validLevels.value.includes(student.value.level)) {
          issues.value.push("اختر السنة الدراسية");
        }

        if (student.value.picture.trim() == "") {
          issues.value.push("اختر صورة");
        }

        if (issues.value.length > 0) {
          e.preventDefault();
          alert(" ==>  " + issues.value.join(' \n ==>  ') + ' ');
        }

        issues.value = [];
      }
    });

    window.onbeforeprint = (e) => {};

    const issues = ref([]);

    window.onafterprint = () => {
      college.value = "-1";
      student.value = {
        name: "", // $name
        u_no: "", // $u_no
        level: "-1", // $level
        batch: "-1", //$batch_name
        picture: "", //$photo
      };
      issues.value = [];
    };

    return {
      college,
      collegeName,
      student,
      topBarBgClass,
      sigImage: "data:image/webp;base64," + IMAGE_SEG2_BASE64,
      logoImage: "data:image/png;base64," + IMAGE_LOGO_BASE64,
      shickanImage: "data:image/png;base64," + IMAGE_SHICKAN_BASE64,
      onPhotoChange,
    };
  },
}).mount("#app");
