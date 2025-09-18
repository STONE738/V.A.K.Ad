<!DOCTYPE html>
<html lang="vi">
<head>
  <meta charset="UTF-8">
  <title>Bài trắc nghiệm V.A.K.Ad</title>
  <style>
    body {
      font-family: "Segoe UI", Arial, sans-serif;
      background: #f5f7fa;
      margin: 0;
      padding: 0;
      color: #2c3e50;
      line-height: 1.6;
    }
    header {
      background: linear-gradient(135deg, #34495e, #2c3e50);
      color: #fff;
      text-align: center;
      padding: 40px 20px;
      box-shadow: 0 3px 8px rgba(0,0,0,0.2);
    }
    header h1 {
      margin: 0;
      font-size: 28px;
    }
    header p {
      font-size: 16px;
      margin-top: 8px;
    }
    main {
      max-width: 1000px;
      margin: 30px auto;
      padding: 0 20px 50px;
    }
    .instructions {
      background: #ffffff;
      padding: 20px;
      border-radius: 12px;
      box-shadow: 0 2px 6px rgba(0,0,0,0.1);
      margin-bottom: 30px;
    }
    .instructions h2 {
      margin-top: 0;
      color: #27ae60;
    }
    .question {
      background: #ffffff;
      padding: 20px;
      border-radius: 12px;
      box-shadow: 0 2px 6px rgba(0,0,0,0.08);
      margin-bottom: 25px;
    }
    .question h3 {
      margin-top: 0;
      font-size: 18px;
      color: #2980b9;
      margin-bottom: 15px;
    }
    table {
      width: 100%;
      border-collapse: collapse;
      margin-top: 10px;
    }
    th, td {
      border: 1px solid #ddd;
      padding: 10px;
      text-align: center;
    }
    th {
      background: #ecf0f1;
      font-weight: bold;
    }
    td:first-child {
      text-align: left;
      font-weight: 500;
    }
    input[type="radio"] {
      transform: scale(1.2);
      cursor: pointer;
    }
    button {
      background: #e67e22;
      color: #fff;
      border: none;
      padding: 14px 22px;
      border-radius: 10px;
      cursor: pointer;
      font-size: 18px;
      margin: 30px auto;
      display: block;
      transition: 0.3s;
      width: 250px;
    }
    button:hover {
      background: #d35400;
    }
    #result {
      display: none;
      background: #ffffff;
      padding: 25px;
      border-radius: 12px;
      text-align: center;
      font-size: 18px;
      box-shadow: 0 2px 6px rgba(0,0,0,0.1);
      margin-top: 20px;
    }
    .highlight {
      font-size: 20px;
      color: #c0392b;
      font-weight: bold;
    }
    footer {
      text-align: center;
      margin-top: 40px;
      font-size: 8px;
      color: #7f8c8d;
    }
  </style>
</head>
<body>
  <header>
    <h1>BÀI TRẮC NGHIỆM V.A.K.Ad</h1>
    <p>Cách bạn tiếp nhận thông tin: Visual – Auditory – Kinaesthetic – Auditory Digital</p>
  </header>

  <main>
    <div class="instructions">
      <h2>Hướng dẫn</h2>
      <p>Bài trắc nghiệm nhanh sẽ giúp bạn biết mình thuộc tuýp nào trong cách tiếp nhận thông tin. 
         Từ đó bạn có cách học tập, làm việc phù hợp để đạt hiệu suất cao nhất.</p>
      <p><strong>Cách chấm điểm:</strong></p>
      <ul>
        <li>4 = Miêu tả đúng nhất</li>
        <li>3 = Miêu tả khá đúng</li>
        <li>2 = Miêu tả đúng</li>
        <li>1 = Ít đúng nhất</li>
      </ul>
      <p>Mỗi câu có 4 lựa chọn, bạn cần phân bổ điểm 1–4 cho cả 4 lựa chọn (mỗi điểm chỉ dùng 1 lần trong một câu).</p>
    </div>

    <!-- Câu 1 -->
    <div class="question">
      <h3>Câu 1: Bạn thường đưa ra quyết định quan trọng dựa trên</h3>
      <table>
        <thead>
          <tr>
            <th>Lựa chọn</th><th>1 điểm</th><th>2 điểm</th><th>3 điểm</th><th>4 điểm</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>Cảm tính</td>
            <td><input type="radio" name="q1_1" value="K1"></td>
            <td><input type="radio" name="q1_2" value="K2"></td>
            <td><input type="radio" name="q1_3" value="K3"></td>
            <td><input type="radio" name="q1_4" value="K4"></td>
          </tr>
          <tr><td>Những điều nghe hay nhất</td>
            <td><input type="radio" name="q1_1" value="A1"></td>
            <td><input type="radio" name="q1_2" value="A2"></td>
            <td><input type="radio" name="q1_3" value="A3"></td>
            <td><input type="radio" name="q1_4" value="A4"></td>
          </tr>
          <tr><td>Những điều mà bạn nhìn thấy có vẻ tốt nhất</td>
            <td><input type="radio" name="q1_1" value="V1"></td>
            <td><input type="radio" name="q1_2" value="V2"></td>
            <td><input type="radio" name="q1_3" value="V3"></td>
            <td><input type="radio" name="q1_4" value="V4"></td>
          </tr>
          <tr><td>Những thông tin, những dẫn chứng cụ thể</td>
            <td><input type="radio" name="q1_1" value="Ad1"></td>
            <td><input type="radio" name="q1_2" value="Ad2"></td>
            <td><input type="radio" name="q1_3" value="Ad3"></td>
            <td><input type="radio" name="q1_4" value="Ad4"></td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Câu 2 -->
    <div class="question">
      <h3>Câu 2: Trong các buổi tranh luận, bạn dễ bị tác động nhất bởi</h3>
      <table>
        <thead><tr>
          <th>Lựa chọn</th><th>1 điểm</th><th>2 điểm</th><th>3 điểm</th><th>4 điểm</th>
        </tr></thead>
        <tbody>
          <tr><td>Giọng điệu của người khác</td>
            <td><input type="radio" name="q2_1" value="A1"></td>
            <td><input type="radio" name="q2_2" value="A2"></td>
            <td><input type="radio" name="q2_3" value="A3"></td>
            <td><input type="radio" name="q2_4" value="A4"></td>
          </tr>
          <tr><td>Bạn có thể nhìn thấy quan điểm của người khác hay không</td>
            <td><input type="radio" name="q2_1" value="V1"></td>
            <td><input type="radio" name="q2_2" value="V2"></td>
            <td><input type="radio" name="q2_3" value="V3"></td>
            <td><input type="radio" name="q2_4" value="V4"></td>
          </tr>
          <tr><td>Tính logic trong lời tranh luận của người khác</td>
            <td><input type="radio" name="q2_1" value="Ad1"></td>
            <td><input type="radio" name="q2_2" value="Ad2"></td>
            <td><input type="radio" name="q2_3" value="Ad3"></td>
            <td><input type="radio" name="q2_4" value="Ad4"></td>
          </tr>
          <tr><td>Cảm xúc của người khác</td>
            <td><input type="radio" name="q2_1" value="K1"></td>
            <td><input type="radio" name="q2_2" value="K2"></td>
            <td><input type="radio" name="q2_3" value="K3"></td>
            <td><input type="radio" name="q2_4" value="K4"></td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Câu 3 -->
    <div class="question">
      <h3>Câu 3: Điều gì bạn cảm thấy hài lòng nhất về bản thân?</h3>
      <table>
        <thead><tr>
          <th>Lựa chọn</th><th>1 điểm</th><th>2 điểm</th><th>3 điểm</th><th>4 điểm</th>
        </tr></thead>
        <tbody>
          <tr><td>Cách bạn ăn mặc</td>
            <td><input type="radio" name="q3_1" value="V1"></td>
            <td><input type="radio" name="q3_2" value="V2"></td>
            <td><input type="radio" name="q3_3" value="V3"></td>
            <td><input type="radio" name="q3_4" value="V4"></td>
          </tr>
          <tr><td>Cách bạn chia sẻ cảm xúc</td>
            <td><input type="radio" name="q3_1" value="K1"></td>
            <td><input type="radio" name="q3_2" value="K2"></td>
            <td><input type="radio" name="q3_3" value="K3"></td>
            <td><input type="radio" name="q3_4" value="K4"></td>
          </tr>
          <tr><td>Cách bạn dùng từ</td>
            <td><input type="radio" name="q3_1" value="Ad1"></td>
            <td><input type="radio" name="q3_2" value="Ad2"></td>
            <td><input type="radio" name="q3_3" value="Ad3"></td>
            <td><input type="radio" name="q3_4" value="Ad4"></td>
          </tr>
          <tr><td>Giọng nói của bạn</td>
            <td><input type="radio" name="q3_1" value="A1"></td>
            <td><input type="radio" name="q3_2" value="A2"></td>
            <td><input type="radio" name="q3_3" value="A3"></td>
            <td><input type="radio" name="q3_4" value="A4"></td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Câu 4 -->
    <div class="question">
      <h3>Câu 4: Bạn thấy thật dễ dàng</h3>
      <table>
        <thead><tr>
          <th>Lựa chọn</th><th>1 điểm</th><th>2 điểm</th><th>3 điểm</th><th>4 điểm</th>
        </tr></thead>
        <tbody>
          <tr><td>Điều chỉnh âm lượng và giai điệu của âm thanh sao cho hay nhất</td>
            <td><input type="radio" name="q4_1" value="A1"></td>
            <td><input type="radio" name="q4_2" value="A2"></td>
            <td><input type="radio" name="q4_3" value="A3"></td>
            <td><input type="radio" name="q4_4" value="A4"></td>
          </tr>
          <tr><td>Chọn lựa những thông tin có giá trị nhất trong một chủ đề</td>
            <td><input type="radio" name="q4_1" value="Ad1"></td>
            <td><input type="radio" name="q4_2" value="Ad2"></td>
            <td><input type="radio" name="q4_3" value="Ad3"></td>
            <td><input type="radio" name="q4_4" value="Ad4"></td>
          </tr>
          <tr><td>Chọn những đồ đạc bạn cảm thấy thoải mái nhất</td>
            <td><input type="radio" name="q4_1" value="K1"></td>
            <td><input type="radio" name="q4_2" value="K2"></td>
            <td><input type="radio" name="q4_3" value="K3"></td>
            <td><input type="radio" name="q4_4" value="K4"></td>
          </tr>
          <tr><td>Chọn những đồ có sự kết hợp màu sắc hài hòa và bắt mắt nhất</td>
            <td><input type="radio" name="q4_1" value="V1"></td>
            <td><input type="radio" name="q4_2" value="V2"></td>
            <td><input type="radio" name="q4_3" value="V3"></td>
            <td><input type="radio" name="q4_4" value="V4"></td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Câu 5 -->
    <div class="question">
      <h3>Câu 5:</h3>
      <table>
        <thead><tr>
          <th>Lựa chọn</th><th>1 điểm</th><th>2 điểm</th><th>3 điểm</th><th>4 điểm</th>
        </tr></thead>
        <tbody>
          <tr><td>Bạn rất nhạy cảm với những âm thanh xung quanh</td>
            <td><input type="radio" name="q5_1" value="A1"></td>
            <td><input type="radio" name="q5_2" value="A2"></td>
            <td><input type="radio" name="q5_3" value="A3"></td>
            <td><input type="radio" name="q5_4" value="A4"></td>
          </tr>
          <tr><td>Bạn rất nhạy bén với các thông tin mới</td>
            <td><input type="radio" name="q5_1" value="Ad1"></td>
            <td><input type="radio" name="q5_2" value="Ad2"></td>
            <td><input type="radio" name="q5_3" value="Ad3"></td>
            <td><input type="radio" name="q5_4" value="Ad4"></td>
          </tr>
          <tr><td>Bạn rất nhạy cảm với những đồ bạn đang mặc</td>
            <td><input type="radio" name="q5_1" value="K1"></td>
            <td><input type="radio" name="q5_2" value="K2"></td>
            <td><input type="radio" name="q5_3" value="K3"></td>
            <td><input type="radio" name="q5_4" value="K4"></td>
          </tr>
          <tr><td>Bạn phản ứng nhanh với màu sắc và bề ngoài của sự vật</td>
            <td><input type="radio" name="q5_1" value="V1"></td>
            <td><input type="radio" name="q5_2" value="V2"></td>
            <td><input type="radio" name="q5_3" value="V3"></td>
            <td><input type="radio" name="q5_4" value="V4"></td>
          </tr>
        </tbody>
      </table>
    </div>

    <button onclick="calculate()">Tính kết quả</button>
    <div id="result"></div>
  </main>

  <footer>
    File được viết bởi: Phúc Bùi
  </footer>

  <script>
    function calculate() {
      let V=0,A=0,K=0,Ad=0;
      const radios = document.querySelectorAll("input[type=radio]:checked");
      radios.forEach(r=>{
        const val = r.value;
        const type = val.replace(/[0-9]/g,''); // bỏ số, còn lại V/A/K/Ad
        const score = parseInt(val.replace(/\D/g,'')); // bỏ chữ, lấy số
        if(type==="V") V+=score;
        if(type==="A") A+=score;
        if(type==="K") K+=score;
        if(type==="Ad") Ad+=score;
      });
      let maxScore = Math.max(V,A,K,Ad);
      let strongest = [];
      if(V===maxScore) strongest.push("Visual (Thị giác)");
      if(A===maxScore) strongest.push("Auditory (Thính giác)");
      if(K===maxScore) strongest.push("Kinaesthetic (Cảm xúc)");
      if(Ad===maxScore) strongest.push("Auditory Digital (Nội tâm)");
      document.getElementById("result").style.display="block";
      document.getElementById("result").innerHTML=
        `Tổng điểm:<br><br>
         Visual: ${V} | Auditory: ${A} | Kinaesthetic: ${K} | Auditory Digital: ${Ad}<br><br>
         👉 Phong cách nổi trội: <span class="highlight">${strongest.join(", ")}</span>`;
    }
  </script>
</body>
</html>
