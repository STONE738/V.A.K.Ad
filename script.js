function calculate() {
  let V=0, A=0, K=0, Ad=0;
  const radios = document.querySelectorAll("input[type=radio]:checked");
  radios.forEach(r => {
    const val = r.value;
    const type = val.replace(/[0-9]/g,''); // V, A, K, Ad
    const score = parseInt(val.replace(/\D/g,'')); // lấy số
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

  let meanings = {
    "Visual (Thị giác)": `
      - Học và ghi nhớ tốt qua hình ảnh, màu sắc, sơ đồ, video.<br>
      - Thường dùng từ ngữ như "tôi thấy", "trông có vẻ".<br>
      - Chú ý đến cách trình bày, ngoại hình, chi tiết trực quan.<br>
      - Mạnh ở việc xử lý thông tin phức tạp khi có minh họa trực quan.<br>
      - Hạn chế: khó tập trung nếu chỉ nghe mà không có hình ảnh minh họa.`,
    "Auditory (Thính giác)": `
      - Tiếp nhận thông tin qua nghe giảng, thảo luận, trò chuyện.<br>
      - Ghi nhớ tốt âm thanh, giọng nói, giai điệu.<br>
      - Thường dùng từ ngữ như "tôi nghe thấy", "nghe hợp lý".<br>
      - Mạnh khi học qua thuyết trình, trao đổi nhóm.<br>
      - Hạn chế: dễ bị phân tán trong môi trường ồn ào, khó nhớ khi chỉ đọc.`,
    "Kinaesthetic (Cảm xúc)": `
      - Học hiệu quả khi trải nghiệm, thực hành, vận động, chạm vào đồ vật.<br>
      - Thường nhớ bằng cảm giác, trải nghiệm cơ thể.<br>
      - Hay dùng từ ngữ như "tôi cảm thấy", "cảm giác".<br>
      - Mạnh ở việc học qua hành động, trải nghiệm thực tế.<br>
      - Hạn chế: khó tiếp thu trong môi trường học chỉ nghe – nhìn mà không có hoạt động thực hành.`,
    "Auditory Digital (Nội tâm)": `
      - Thiên về tư duy logic, phân tích, ngôn ngữ và khái niệm trừu tượng.<br>
      - Tiếp nhận thông tin tốt qua đọc, viết, phân tích.<br>
      - Thường nói "tôi nghĩ rằng", "điều hợp lý là".<br>
      - Mạnh ở phân tích, lập kế hoạch, xử lý lý thuyết.<br>
      - Hạn chế: có thể bỏ qua yếu tố cảm xúc, khó hòa nhập khi giao tiếp cảm tính.`
  };

  let explanation = strongest.map(s => `<br><strong>${s}:</strong><br>${meanings[s]}`).join("<br><br>");

  document.getElementById("result").style.display="block";
  document.getElementById("result").innerHTML=
    `Tổng điểm:<br><br>
     Visual: ${V} | Auditory: ${A} | Kinaesthetic: ${K} | Auditory Digital: ${Ad}<br><br>
     👉 Phong cách nổi trội: <span class="highlight">${strongest.join(", ")}</span><br><br>
     ${explanation}`;
}
