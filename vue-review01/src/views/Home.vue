<template>
  <div>
    <h1>Welcome to {{ title }}!</h1>
    <!-- 사용자가 쓴 데이터를 보여주기 -->
    <!-- html에서 value에 해당하는 부분 vue.js에서는 v-model을 이용 -->
    <!-- v-model을 통해 데이터를 바인딩하고 처리할 수 있어 -->
    <!-- v-model은 2way binding -->
    <input type="text" v-model="input1" />
    <!-- @click을 통해서 binding. Get이라는 버튼을 클릭하는 순간 특정 method 호출-->
    <!-- @click="method 명" -->
    <button type="button" @click="getData">Get</button>
    <button type="button" @click="setData">Set</button>

    <!-- value는 v-model을 통해서 data binding 가능 -->
    <!-- v-model을 통해서 region이라는 데이터가 2way 방식으로 binding된다 -->
    <select class="form-control" v-model="region" @change="changeRegion">
      <!-- list형태는 v-for를 통해서 배열 돌릴 수 있어 -->
      <!-- 배열을 하나하나씩 돌리면서 가져온 데이터({v:"S", t:"Seoul"},
        {v:"J", t:"Jeju"},
        {v:"K", t:"Dokdo"},)가 d에 해당, i는 배열을 돌렸을 때 index(순서)를 가져오는 방식 -->
      <!-- v-for를 통해 options이란 데이터에 접근해서 for문 돌려서 하나하나씩 빼서 데이터 가져오고, 그거에 대한 index 번호 가져옴-->
      <!-- component object마다 key를 넣어줘야해. key라는건 유일한 값 -->
      <!-- option이라는 것이 for문을 통해 여러개 만들어 주더라더 그 키값은 index번호를 갖고, 유일한 키값을 만들 수 있어 -->
      <!-- d.v -> option이 for문 돌리면서 v값들이 value에 할당된다. -->
      <!-- html 코드 안에서 data 접근할 때는 {{}} 사용. element안에서 attribute에 data 접근을 적용할 때는 :사용. :을 사용하면 data 변수에 바로 접근 가능 -->
      <!-- 배열 형태로 데이터(다중 데이터) 처리해야할 때느 v-for 이용 -->
      <option :key="i" :value="d.v" v-for="(d, i) in options">{{ d.t }}</option>

      <!-- v-if조건 만족(true)되면 rendering 하겠다. -->
      <!-- v-show는 조건에 만족하던 안하던 화면 상에 무조건 rendering 한다. 단지, 조건이 만족하지 않으면 화면에만 보여주지 않을 뿐이다. 가리는 스타일을 줬다 안줬다하는 행위 -->
      <!-- 화면 상 보였단 안보였다를 자주해야하면, v-show 사용. rendering하는 행위는 리소스 많이 소요되기 때문에 v-show사용. -->
      <!-- 특정 조건에 이르렀을 때만 화면상에 보이게 한다 할때는 v-if 사용 -->
      <table class="table table-bordered" v-if="tableShow">
        <tr :key="i" :value="d.v" v-for="(d, i) in options">
          <td>{{ d.v }}</td>
          <td>{{ d.t }}</td>
        </tr>
      </table>
    </select>
  </div>
</template>
<script>
export default {
  // data라는 매소드 정의
  data() {
    return {
      // 컨트롤하고 싶은 데이터 변수 정의해서 사용

      // 이렇게 정의된 데이터는 실제 template에 어떻게 바인딩 시킬 수 있냐면? template 내 {{}}사이에 정의한 이름(여기선 title)을 넣는다.
      title: "도희경은 실력있는 개발자",
      input1: "I can do it.",
      options:[
        {v:"S", t:"Seoul"},
        {v:"J", t:"Jeju"},
        {v:"D", t:"Dokdo"},
      ],
      // 기본값을 J라고 하자
      region:"J",
      tableShow: false
    };
  },

  // watch 내에서 정의한 data를 function형식으로 만들 수 있어.
  // watch내에 정의한 data가 조금이라도 변경이 일어나면 데이터명과 동일하게 만들어 놓은 function 명 안에서 data가 변경되는 것을 바로 캐치해서 알 수 있어
  // 사용자로부터의 action을 받는 것이 아니고, 프로그램 상에서 특정 데이터가 바뀌는지 모니터링 해야하는 경우 존재. 그럴 경우 watch method 사용
  // 데이터 변경되는 즉시 어떤 작업을 실행할 필요가 있을 때, 그럴 때 사용!
 watch: {
input1() {
  console.log(this.input1);
}
  }

  // vue.js 모든 methods는 methods에 정의
  methods: {
    // 실제 methods 안에서 data에 접근을 하려면 this객체 이용. this.변수명으로 이용
    // 이곳에 여러 function 선언

    // input 데이터 가져오는 함수
    getData() {
      // input에 입력된 값을 보여주자
      alert(this.input1);
    },

    // input 데이터 바꾸는 함수
    setData() {
      // set 버튼을 클릭하면 input1의 값을 12345로 바꾸자
      this.input1 = "12345";
    },

// option값 바뀌면 alert창 뜨게하자
    changeRegion() {
      alert(this.region);
    }

    beforeCreate() {
      console.log("beforeCreate");
    },

    created() {
      console.log("created");
    },

    beforeMount() {
      console.log("beforeMount");
    },

    mounted() {
      console.log("mounted");
    },

    beforeUpdate() {
      console.log("beforeUpdate");
    },

    updated() {
      console.log("updated");
    },

    beforeDestroy() {
      console.log("beforeDestroy");
    },

    destroyed() {
      console.log("destroyed");
    },
  },
};
</script>
