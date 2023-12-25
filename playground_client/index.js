let fifaOuid;
function mapleAPI() {
    $.ajax({
        type : "GET",            // HTTP method type(GET, POST) 형식이다.
        url : "https://open.api.nexon.com/maplestory/v1/history/cube",      // 컨트롤러에서 대기중인 URL 주소이다.
        headers: {
            accept: "application/json",
            "x-nxopen-api-key": "test_b18fcb6348a4b85a79531ef36b9ab7bf5fb70dfcdb40ee300c993f2f56a72ebf480370114fefe84278bf9c73607ad8c8",
        },
        data : {
            count : 100,
            date_kst: "20231101",
            cube_history: {
                id: "평생고혹"
            }
        },            // Json 형식의 데이터이다.
        success : function(res){ // 비동기통신의 성공일경우 success콜백으로 들어옵니다. 'res'는 응답받은 데이터이다.
            // 응답코드 > 0000
            alert(res);
        },
        error : function(XMLHttpRequest, textStatus, errorThrown){ // 비동기 통신이 실패할경우 error 콜백으로 들어옵니다.
            alert("통신 실패.")
        }
    });
}

function fifaAPI_ouid() {
    $.ajax({
        type : "GET",            // HTTP method type(GET, POST) 형식이다.
        url : "https://open.api.nexon.com/fconline/v1/id",      // 컨트롤러에서 대기중인 URL 주소이다.
        headers: {
            accept: "application/json",
            "x-nxopen-api-key": "test_8a907d79002cab42904e6c614018971e221233abe44552f43bc587f41a1136c20548105f26f16a26880e89514563ad58",
        },
        data : {
            nickname: "유망구단"
        },            // Json 형식의 데이터이다.
        success : function(res){ // 비동기통신의 성공일경우 success콜백으로 들어옵니다. 'res'는 응답받은 데이터이다.
            // 응답코드 > 0000
            alert("당신의 ouid : "+res.ouid);
            fifaOuid = res.ouid;
        },
        error : function(XMLHttpRequest, textStatus, errorThrown){ // 비동기 통신이 실패할경우 error 콜백으로 들어옵니다.
            alert("통신 실패.")
        }
    });
}

function fifaAPI_maxdivision() {
    $.ajax({
        type : "GET",            // HTTP method type(GET, POST) 형식이다.
        url : "https://open.api.nexon.com/fconline/v1/user/maxdivision",      // 컨트롤러에서 대기중인 URL 주소이다.
        headers: {
            accept: "application/json",
            "x-nxopen-api-key": "test_8a907d79002cab42904e6c614018971e221233abe44552f43bc587f41a1136c20548105f26f16a26880e89514563ad58",
        },
        data : {
            ouid: fifaOuid
        },            // Json 형식의 데이터이다.
        success : function(res){ // 비동기통신의 성공일경우 success콜백으로 들어옵니다. 'res'는 응답받은 데이터이다.
            // 응답코드 > 0000
            alert(res);
        },
        error : function(XMLHttpRequest, textStatus, errorThrown){ // 비동기 통신이 실패할경우 error 콜백으로 들어옵니다.
            alert("통신 실패.")
        }
    });
}