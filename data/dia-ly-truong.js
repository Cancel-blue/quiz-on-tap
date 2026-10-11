/* ===== ĐỊA LÍ 12 - ÔN TẬP GIỮA KÌ 1 ===== */
window.DIA_ALL = [];

/* ===== PHẦN 1: 60 CÂU ABCD ===== */
window.DIA_ALL.push(
  {
    type: "abcd",
    q: "Trên đất liền, vùng trời của nước ta được xác định bởi ranh giới nào sau đây?",
    o: ["Đường bờ biển nước ta.", "Đường biên giới quốc gia.", "Đường cơ sở trên biển.", "Đường vĩ tuyến biên giới."],
    a: 1,
    explain: "Vùng trời trên đất liền được xác định bởi đường biên giới quốc gia."
  },
  {
    type: "abcd",
    q: "Việt Nam gắn liền với lục địa và đại dương nào sau đây?",
    o: ["Á-Âu và Bắc Băng Dương.", "Á-Âu và Đại Tây Dương.", "Á-Âu và Ấn Độ Dương.", "Á-Âu và Thái Bình Dương."],
    a: 3,
    explain: "Việt Nam nằm ở rìa phía đông bán đảo Đông Dương, gắn với lục địa Á-Âu và Thái Bình Dương."
  },
  {
    type: "abcd",
    q: "Vùng biển của nước ta không tiếp giáp với vùng biển của quốc gia nào sau đây?",
    o: ["Trung Quốc.", "Cam-pu-chia.", "Thái Lan.", "Mi-an-ma."],
    a: 3,
    explain: "Vùng biển nước ta giáp Trung Quốc, Campuchia, Thái Lan, Philippines, Indonesia, Malaysia, Brunei — không giáp Myanmar."
  },
  {
    type: "abcd",
    q: "Nước ta thuận lợi giao lưu với các nước trên thế giới là do nguyên nhân chủ yếu nào sau đây?",
    o: ["Có nhiều nét tương đồng về lịch sử và văn hóa.", "Ở khu vực giao thoa giữa các nền văn minh lớn.", "Ở Ngã tư đường hàng hải và hàng không quốc tế.", "Nằm hoàn toàn ở bán cầu Bắc và bán cầu Đông."],
    a: 2,
    explain: "Vị trí nằm trên ngã tư đường hàng hải, hàng không quốc tế giúp nước ta giao lưu thuận lợi với các nước."
  },
  {
    type: "abcd",
    q: "Gió mùa mùa đông thổi vào nước ta theo hướng chủ yếu nào sau đây?",
    o: ["Tây bắc.", "Đông bắc.", "Đông nam.", "Tây nam."],
    a: 1,
    explain: "Gió mùa Đông Bắc thổi từ cao áp Xibia vào nước ta theo hướng đông bắc."
  },
  {
    type: "abcd",
    q: "Khối khí nhiệt đới ẩm Bắc Ấn Độ Dương làm cho khí hậu vùng đồng bằng Nam Bộ nước ta có",
    o: ["mưa lớn vào đầu mùa hạ.", "lượng bức xạ Mặt Trời lớn.", "hai mùa khác nhau rõ rệt.", "mưa nhiều vào thu đông."],
    a: 0,
    explain: "Khối khí Bắc Ấn Độ Dương gây mưa lớn đầu mùa hạ cho Nam Bộ và Tây Nguyên."
  },
  {
    type: "abcd",
    q: "Mưa phùn vùng ven biển và các đồng bằng Bắc Bộ, Bắc Trung Bộ thường diễn ra vào",
    o: ["nửa đầu mùa đông.", "nửa sau mùa đông.", "nửa sau mùa xuân.", "nửa đầu mùa hạ."],
    a: 1,
    explain: "Vào nửa sau mùa đông, gió Đông Bắc qua biển mang hơi ẩm gây mưa phùn cho Bắc Bộ, Bắc Trung Bộ."
  },
  {
    type: "abcd",
    q: "Đặc điểm nổi bật của địa hình miền Bắc và Đông Bắc Bắc Bộ là có",
    o: ["các cao nguyên đất xám lớn.", "các cao nguyên đất đỏ rộng.", "hệ thống các cánh cung núi.", "các dải núi cao và đồ sộ."],
    a: 2,
    explain: "Địa hình Đông Bắc nổi bật với các cánh cung núi lớn (Sông Gâm, Ngân Sơn, Bắc Sơn, Đông Triều) mở rộng về phía bắc."
  },
  {
    type: "abcd",
    q: "Phát biểu nào sau đây đúng với đặc điểm sông ngòi miền Tây Bắc và Bắc Trung Bộ?",
    o: ["Đều là các sông ngắn và dốc.", "Chủ yếu hướng tây bắc - đông nam.", "Sông ngòi nhiều nước quanh năm.", "Chủ yếu có hướng vòng cung."],
    a: 1,
    explain: "Sông ngòi miền Tây Bắc và Bắc Trung Bộ chủ yếu chảy theo hướng tây bắc - đông nam do địa hình."
  },
  {
    type: "abcd",
    q: "Cảnh quan thiên nhiên điển hình ở miền Nam Trung Bộ và Nam Bộ là",
    o: ["rừng ôn đới gió mùa.", "rừng cận xích đạo gió mùa.", "rừng cận nhiệt đới.", "cây bụi gai và xa van."],
    a: 1,
    explain: "Miền Nam Trung Bộ và Nam Bộ có khí hậu cận xích đạo, cảnh quan điển hình là rừng cận xích đạo gió mùa."
  },
  {
    type: "abcd",
    q: "Phát biểu nào sau đây là biểu hiện của sự suy giảm tài nguyên đất ở nước ta?",
    o: ["Diện tích đất nông nghiệp chiếm đa số.", "Gồm nhiều loại đất khác nhau.", "Chất lượng khác nhau giữa các loại đất.", "Nhiều nơi đất bị giảm độ phì."],
    a: 3,
    explain: "Suy giảm tài nguyên đất biểu hiện rõ nhất qua việc nhiều nơi đất bị giảm độ phì, thoái hóa."
  },
  {
    type: "abcd",
    q: "Phía tây nước ta tiếp giáp với những quốc gia nào sau đây?",
    o: ["Lào và Thái Lan.", "Campuchia và Trung Quốc.", "Lào và Campuchia.", "Lào và Trung Quốc."],
    a: 2,
    explain: "Phía tây nước ta giáp Lào và Campuchia."
  },
  {
    type: "abcd",
    q: "Hệ tọa độ địa lí phần đất liền nước ta là",
    o: ["23°20'B - 8°30'B và 102°09'Đ - 109°24'Đ.", "23°23'B - 8°30'B và 102°09'Đ - 109°28'Đ.", "23°23'B - 8°34'B và 102°09'Đ - 109°28'Đ.", "23°23'B - 8°34'B và 102°09'Đ - 109°20'Đ."],
    a: 2,
    explain: "Hệ tọa độ đất liền: từ 23°23'B đến 8°34'B và từ 102°09'Đ đến 109°28'Đ."
  },
  {
    type: "abcd",
    q: "Phát biểu nào sau đây đúng về vị trí địa lí của nước ta?",
    o: ["Thuộc bán đảo Đông Dương.", "Trong vùng ôn đới.", "Phía đông của Biển Đông.", "Trong vùng ít thiên tai."],
    a: 0,
    explain: "Việt Nam nằm ở rìa đông bán đảo Đông Dương, thuộc khu vực Đông Nam Á."
  },
  {
    type: "abcd",
    q: "Vị trí địa lí nước ta nằm ở",
    o: ["bờ Tây của Địa Trung Hải.", "khu vực có nhiều sa mạc.", "trong vùng khí hậu ôn đới.", "khu vực gió mùa châu Á."],
    a: 3,
    explain: "Nước ta nằm trong khu vực gió mùa châu Á điển hình."
  },
  {
    type: "abcd",
    q: "Vùng biển của nước ta",
    o: ["có diện tích nhỏ hơn vùng đất.", "ở phía tây Thái Bình Dương.", "giáp với vùng biển Mi-an-ma.", "có kiểu khí hậu ôn đới gió mùa."],
    a: 1,
    explain: "Vùng biển nước ta nằm ở phía tây Thái Bình Dương."
  },
  {
    type: "abcd",
    q: "Vùng biển của nước ta",
    o: ["giáp với vùng biển Mi-an-ma.", "có diện tích lớn hơn vùng đất.", "có khí hậu ôn đới hải dương.", "ở phía tây của Ấn Độ Dương."],
    a: 1,
    explain: "Vùng biển nước ta khoảng 1 triệu km², lớn hơn diện tích đất liền (331 nghìn km²)."
  },
  {
    type: "abcd",
    q: "Vị trí địa lí nước ta",
    o: ["ở trung tâm Đông Nam Á.", "tiếp giáp với Ấn Độ Dương.", "giáp với nhiều quốc gia.", "nằm trên vành đai sinh khoáng."],
    a: 3,
    explain: "Nước ta nằm trên vành đai sinh khoáng Địa Trung Hải - Thái Bình Dương, giàu khoáng sản."
  },
  {
    type: "abcd",
    q: "Việt Nam không có chung đường biên giới với quốc gia nào sau đây?",
    o: ["Lào.", "Trung Quốc.", "Mi-an-ma.", "Cam-pu-chia."],
    a: 2,
    explain: "Nước ta chỉ giáp Trung Quốc, Lào, Campuchia trên đất liền — không giáp Myanmar."
  },
  {
    type: "abcd",
    q: "Phần đất liền của nước ta",
    o: ["thu hẹp theo chiều bắc - nam.", "giáp với Biển Đông rộng lớn.", "rộng gấp nhiều lần vùng biển.", "bao gồm cả các đảo ở ven bờ."],
    a: 1,
    explain: "Phần đất liền nước ta có đường bờ biển dài 3260 km giáp Biển Đông."
  },
  {
    type: "abcd",
    q: "Ý nghĩa kinh tế của vị trí địa lí nước ta là",
    o: ["tự nhiên phân hóa đa dạng giữa bắc - nam và đông - tây.", "nguồn tài nguyên sinh vật và khoáng sản vô cùng giàu có.", "thuận lợi giao lưu với các nước trong khu vực và thế giới.", "thuận lợi để xây dựng nền văn hóa tương đồng với khu vực."],
    a: 2,
    explain: "Vị trí địa lí tạo điều kiện thuận lợi để nước ta giao lưu kinh tế với các nước trong khu vực và thế giới."
  },
  {
    type: "abcd",
    q: "Do tiếp giáp Biển Đông nên nước ta có",
    o: ["hai lần Mặt Trời lên thiên đỉnh trong năm.", "gió mùa Đông Bắc hoạt động ở mùa đông.", "tổng lượng mưa lớn, độ ẩm không khí cao.", "một mùa có mưa nhiều, một mùa mưa ít."],
    a: 2,
    explain: "Biển Đông cung cấp hơi ẩm, làm cho nước ta có lượng mưa lớn và độ ẩm cao."
  },
  {
    type: "abcd",
    q: "Điểm khác biệt về khí hậu của Nam Bộ so với vùng ven biển Nam Trung Bộ là",
    o: ["mùa mưa ngắn hơn.", "mùa mưa sớm hơn.", "khí hậu cận xích đạo.", "nóng quanh năm."],
    a: 2,
    explain: "Nam Bộ có khí hậu cận xích đạo, còn Nam Trung Bộ có khí hậu nhiệt đới gió mùa."
  },
  {
    type: "abcd",
    q: "Cho bảng số liệu lượng mưa Lai Châu 2024 (mm): T1: 185,2 / T2: 44,5 / T3: 69,1 / T4: 27,7 / T5: 383,9 / T6: 541,8 / T7: 395,4 / T8: 362,6 / T9: 164,7 / T10: 148,1 / T11: 4,4 / T12: 21,9. Nhận xét nào sau đây đúng?",
    o: ["Tổng lượng mưa năm 2024 là 2349,3 mm.", "Tháng 6 có lượng mưa nhỏ nhất.", "Lượng mưa đều, ít có sự phân hóa trong năm.", "Mưa nhiều chủ yếu vào mùa đông."],
    a: 0,
    explain: "Tổng lượng mưa = 2349,3 mm. Tháng 6 mưa lớn nhất (541,8 mm), tháng 11 nhỏ nhất (4,4 mm)."
  },
  {
    type: "abcd",
    q: "Để bảo vệ tài nguyên đất nông nghiệp ở các đồng bằng của nước ta cần",
    o: ["áp dụng biện pháp nông lâm kết hợp.", "ngăn chặn nạn du canh, du cư.", "thực hiện kĩ thuật canh tác trên đất dốc.", "chống suy thoái và ô nhiễm đất."],
    a: 3,
    explain: "Ở đồng bằng, biện pháp chính là chống suy thoái, ô nhiễm đất (do hóa chất, canh tác quá mức)."
  },
  {
    type: "abcd",
    q: "Việc dân cư nước ta phân bố không đồng đều giữa vùng đồng bằng và miền núi gây khó khăn lớn nhất cho",
    o: ["khai thác tài nguyên và sử dụng hợp lí nguồn lao động.", "quá trình giao lưu văn hóa giữa các dân tộc trong vùng.", "việc bảo vệ chủ quyền biên giới và an ninh của đất nước.", "triển khai các mô hình sản xuất nông nghiệp công nghệ cao."],
    a: 0,
    explain: "Phân bố dân cư không đều gây khó khăn cho việc khai thác tài nguyên và sử dụng hợp lí nguồn lao động."
  },
  {
    type: "abcd",
    q: "Tính chất nhiệt đới của khí hậu nước ta được quy định bởi",
    o: ["vị trí trong vùng nội chí tuyến.", "địa hình nước ta thấp dần ra biển.", "hoạt động của gió phơn Tây Nam.", "địa hình nước ta nhiều đồi núi."],
    a: 0,
    explain: "Vị trí nằm trong vùng nội chí tuyến bán cầu Bắc quy định tính chất nhiệt đới của khí hậu nước ta."
  },
  {
    type: "abcd",
    q: "Vào đầu mùa hạ, gió mùa mùa hạ xuất phát từ đâu?",
    o: ["Áp cao bắc Ấn Độ Dương.", "Biển Đông.", "Áp cao cận chí tuyến bán cầu Nam.", "Cao áp Xi bia."],
    a: 0,
    explain: "Đầu mùa hạ, gió mùa Tây Nam xuất phát từ áp cao Bắc Ấn Độ Dương gây mưa cho Nam Bộ và Tây Nguyên."
  },
  {
    type: "abcd",
    q: "Đặc điểm của đất feralit là",
    o: ["có màu đỏ vàng, chua.", "có màu đen, xốp thoát nước.", "có màu đỏ vàng, mặn.", "có màu nâu, khó thoát nước."],
    a: 0,
    explain: "Đất feralit đặc trưng có màu đỏ vàng, chua, nghèo mùn do quá trình rửa trôi."
  },
  {
    type: "abcd",
    q: "Gió mùa hoạt động ở nước ta gồm",
    o: ["gió mùa mùa đông và gió mùa mùa hạ.", "gió mùa mùa đông và tín phong bán cầu Bắc.", "gió mùa mùa hạ và tín phong bán cầu Bắc.", "gió mùa mùa hạ và tín phong bán cầu Nam."],
    a: 0,
    explain: "Nước ta có 2 loại gió mùa chính: gió mùa mùa đông và gió mùa mùa hạ."
  }
);
window.DIA_ALL.push(
  {
    type: "abcd",
    q: "Đặc điểm nào sau đây không đúng với sông ngòi nước ta?",
    o: ["Mạng lưới dày đặc.", "Nhiều nước quanh năm.", "Thủy chế theo mùa.", "Có trữ lượng phù sa lớn."],
    a: 1,
    explain: "Sông ngòi nước ta có thủy chế theo mùa (mùa lũ - mùa cạn), không phải nhiều nước quanh năm."
  },
  {
    type: "abcd",
    q: "Phát biểu nào sau đây đúng khi nói về đặc điểm gió mùa ở nước ta?",
    o: ["Gió mùa mùa hạ có hướng chính là đông nam.", "Gió mùa mùa hạ có nguồn gốc từ cao áp Xibia.", "Gió mùa mùa đông thổi liên tục từ tháng 11 đến tháng 4.", "Gió mùa mùa đông thổi từng đợt từ tháng 11 đến tháng 4."],
    a: 3,
    explain: "Gió mùa Đông Bắc thổi từng đợt, không liên tục, từ tháng 11 đến tháng 4 năm sau."
  },
  {
    type: "abcd",
    q: "Càng vào phía Nam gió mùa Đông Bắc càng",
    o: ["suy yếu.", "mạnh.", "khô nóng.", "mưa nhiều."],
    a: 0,
    explain: "Càng vào Nam, gió mùa Đông Bắc càng suy yếu và biến tính do ma sát với địa hình."
  },
  {
    type: "abcd",
    q: "Thiên nhiên nhiệt đới ẩm gió mùa ở nước ta ảnh hưởng trực tiếp và rõ rệt nhất đến hoạt động sản xuất nào sau đây?",
    o: ["Công nghiệp.", "Nông nghiệp.", "Du lịch.", "Giao thông vận tải."],
    a: 1,
    explain: "Nông nghiệp chịu ảnh hưởng trực tiếp và rõ rệt nhất từ khí hậu nhiệt đới ẩm gió mùa."
  },
  {
    type: "abcd",
    q: "Thành phần loài nào sau đây không thuộc cây nhiệt đới?",
    o: ["Dầu.", "Đỗ Quyên.", "Dâu tằm.", "Đậu."],
    a: 1,
    explain: "Đỗ Quyên là loài cây ôn đới, không thuộc cây nhiệt đới."
  },
  {
    type: "abcd",
    q: "Thời kì chuyển tiếp hoạt động giữa gió mùa Đông Bắc và Tây Nam là thời kì hoạt động mạnh của",
    o: ["gió mùa mùa đông.", "gió mùa mùa hạ.", "gió Mậu dịch.", "gió địa phương."],
    a: 2,
    explain: "Thời kì chuyển tiếp (mùa xuân, mùa thu) là lúc gió Tín phong (Mậu dịch) hoạt động mạnh."
  },
  {
    type: "abcd",
    q: "Gió Tín Phong hoạt động mạnh nhất vào thời kì nào sau đây?",
    o: ["Mùa hạ và mùa thu.", "Mùa đông và mùa xuân.", "Mùa xuân và mùa thu.", "Mùa hạ và mùa xuân."],
    a: 2,
    explain: "Gió Tín phong hoạt động mạnh vào mùa xuân và mùa thu — thời kì chuyển tiếp giữa 2 mùa gió."
  },
  {
    type: "abcd",
    q: "Đặc điểm khí hậu tiêu biểu của đai ôn đới gió mùa trên núi ở nước ta là nhiệt độ quanh năm",
    o: ["dưới 5°C.", "dưới 10°C.", "dưới 15°C.", "trên 20°C."],
    a: 2,
    explain: "Đai ôn đới gió mùa trên núi có nhiệt độ quanh năm dưới 15°C, xuất hiện từ độ cao 2600m trở lên."
  },
  {
    type: "abcd",
    q: "Đặc điểm nổi bật của địa hình miền Bắc và Đông Bắc Bắc Bộ là vùng đồi núi thấp chiếm ưu thế với",
    o: ["các cao nguyên đất xám lớn.", "các cao nguyên đất đỏ rộng.", "hệ thống các cánh cung núi.", "các dải núi cao và đồ sộ."],
    a: 2,
    explain: "Địa hình Đông Bắc nổi bật với các cánh cung núi lớn."
  },
  {
    type: "abcd",
    q: "Phát biểu nào sau đây không đúng với khí hậu của phần lãnh thổ phía Nam nước ta?",
    o: ["Biên độ nhiệt độ trung bình năm lớn.", "Nhiệt độ trung bình năm trên 25°C.", "Phân hóa hai mùa mưa và khô rõ rệt.", "Nền nhiệt độ thiên về khí hậu xích đạo."],
    a: 0,
    explain: "Phần lãnh thổ phía Nam có biên độ nhiệt năm NHỎ, không phải lớn."
  },
  {
    type: "abcd",
    q: "Nhận xét nào sau đây không đúng với sự thay đổi nhiệt độ theo Bắc - Nam ở nước ta?",
    o: ["Biên độ nhiệt độ năm càng vào Nam càng giảm.", "Nhiệt độ trung bình năm tăng dần từ Bắc - Nam.", "Nhiệt độ trung bình năm giảm dần từ Bắc - Nam.", "Nhiệt độ mùa hạ ít có sự khác nhau giữa hai miền."],
    a: 2,
    explain: "Nhiệt độ trung bình năm TĂNG dần từ Bắc vào Nam, không phải giảm."
  },
  {
    type: "abcd",
    q: "Thành phần loài chiếm ưu thế ở phần lãnh thổ phía Bắc nước ta là",
    o: ["cây lá kim và thú có lông dày.", "cây chịu hạn, rụng lá theo mùa.", "động thực vật cận nhiệt đới.", "động vật và thực vật nhiệt đới."],
    a: 3,
    explain: "Phần lãnh thổ phía Bắc có thành phần loài nhiệt đới chiếm ưu thế, xen kẽ các loài cận nhiệt, ôn đới."
  },
  {
    type: "abcd",
    q: "Thiên nhiên vùng núi Đông Bắc nước ta có đặc điểm nào sau đây?",
    o: ["Cảnh quan cận xích đạo gió mùa.", "Cảnh quan nhiệt đới nóng quanh năm.", "Mang sắc thái cận nhiệt đới gió mùa.", "Cảnh quan giống như vùng ôn đới."],
    a: 2,
    explain: "Đông Bắc chịu ảnh hưởng mạnh của gió mùa Đông Bắc nên có sắc thái cận nhiệt đới gió mùa."
  },
  {
    type: "abcd",
    q: "Đặc trưng của khí hậu miền Bắc và Đông Bắc Bắc Bộ là",
    o: ["mùa mưa lùi dần về mùa thu - đông.", "gió phơn Tây Nam hoạt động mạnh.", "chịu ảnh hưởng của gió mùa Đông Bắc.", "phân chia hai mùa mưa, khô sâu sắc."],
    a: 2,
    explain: "Miền Bắc và Đông Bắc Bắc Bộ chịu ảnh hưởng mạnh mẽ của gió mùa Đông Bắc, có mùa đông lạnh."
  },
  {
    type: "abcd",
    q: "Sự phân hóa thiên nhiên theo độ cao ở nước ta biểu hiện rõ qua các thành phần",
    o: ["khí hậu, đất đai, sinh vật.", "sông ngòi, đất đai, khí hậu.", "sinh vật, đất đai, sông ngòi.", "khí hậu, sinh vật, sông ngòi."],
    a: 0,
    explain: "Sự phân hóa theo độ cao biểu hiện rõ nhất qua khí hậu, đất đai và sinh vật."
  },
  {
    type: "abcd",
    q: "Đai cận nhiệt đới gió mùa trên núi ở nước ta có đặc điểm là",
    o: ["các tháng đều có nhiệt độ trên 25°C.", "không có tháng nào nhiệt độ trên 20°C.", "nhiệt độ trung bình các tháng dưới 25°C.", "chỉ có 2 tháng nhiệt độ dưới 25°C."],
    a: 2,
    explain: "Đai cận nhiệt đới gió mùa trên núi có nhiệt độ trung bình các tháng đều dưới 25°C."
  },
  {
    type: "abcd",
    q: "Phát biểu nào sau đây không phải là đặc điểm của phần lãnh thổ phía Bắc nước ta?",
    o: ["Trong năm có một mùa đông lạnh.", "Thời tiết thường diễn biến phức tạp.", "Có một mùa khô sâu sắc kéo dài.", "Biên độ nhiệt độ trung bình năm lớn."],
    a: 2,
    explain: "Phần lãnh thổ phía Bắc có mùa đông lạnh, không có mùa khô sâu sắc như Nam Bộ."
  },
  {
    type: "abcd",
    q: "Việc quản lí tài nguyên nước của nước ta phải bảo đảm tính thống nhất theo lưu vực sông chủ yếu nhằm",
    o: ["bảo đảm sự công bằng trong khai thác, sử dụng.", "tăng nhanh sản lượng đánh bắt thủy sản nội địa.", "hạn chế hoàn toàn hiện tượng sạt lở ven bờ sông.", "thay đổi hướng chảy của các hệ thống sông chính."],
    a: 0,
    explain: "Quản lí theo lưu vực sông nhằm đảm bảo công bằng trong khai thác, sử dụng nước giữa các địa phương."
  },
  {
    type: "abcd",
    q: "Tình trạng suy giảm số lượng cá thể các loài thực vật và động vật hoang dã ở nước ta dẫn đến hệ quả là",
    o: ["làm mất đi các nguồn gen sinh vật quý hiếm.", "làm thay đổi hướng di cư của các loài sinh vật.", "tăng nhanh diện tích các hệ sinh thái thứ sinh.", "xuất hiện thêm nhiều loài ngoại lai xâm hại mới."],
    a: 0,
    explain: "Suy giảm số lượng cá thể làm mất đi nguồn gen quý hiếm, đe dọa đa dạng sinh học."
  },
  {
    type: "abcd",
    q: "Việc lồng ghép và thúc đẩy các mô hình kinh tế xanh ở nước ta hiện nay có ý nghĩa chủ yếu nào sau đây?",
    o: ["Đảm bảo phát triển bền vững, bảo vệ môi trường.", "Thay thế hoàn toàn các ngành công nghiệp cũ kỹ.", "Khai thác tối đa các loại tài nguyên khoáng sản.", "Giải quyết việc làm cho lao động vùng nông thôn."],
    a: 0,
    explain: "Kinh tế xanh hướng đến phát triển bền vững, bảo vệ môi trường và tài nguyên."
  },
  {
    type: "abcd",
    q: "Hậu quả của ô nhiễm môi trường nước, nhất là ở vùng cửa sông, ven biển là",
    o: ["biến đổi khí hậu.", "mưa a-xít.", "cạn kiệt dòng chảy.", "hải sản giảm sút."],
    a: 3,
    explain: "Ô nhiễm nước ở cửa sông, ven biển làm hải sản giảm sút nghiêm trọng."
  },
  {
    type: "abcd",
    q: "Phát biểu nào sau đây không đúng với hiện trạng sử dụng tài nguyên đất của nước ta?",
    o: ["Bình quân trên đầu người nhỏ.", "Diện tích đất có rừng còn thấp.", "Diện tích đất chuyên dùng ngày càng ít.", "Diện tích đất đai bị suy thoái còn rất lớn."],
    a: 2,
    explain: "Diện tích đất chuyên dùng NGÀY CÀNG TĂNG, không phải ngày càng ít."
  },
  {
    type: "abcd",
    q: "Nguồn tài nguyên sinh vật dưới nước, đặc biệt là nguồn hải sản bị giảm sút rõ rệt do nguyên nhân chủ yếu nào sau đây?",
    o: ["Khai thác quá mức và bùng phát dịch bệnh.", "Thời tiết thất thường và khai thác quá mức.", "Dịch bệnh và các hiện tượng thời tiết thất thường.", "Ô nhiễm môi trường nước và khai thác quá mức."],
    a: 3,
    explain: "Ô nhiễm môi trường nước và khai thác quá mức là 2 nguyên nhân chính làm giảm hải sản."
  },
  {
    type: "abcd",
    q: "Nhân tố chính tạo nên sự khác biệt về mật độ dân số giữa Đồng bằng sông Hồng và Đồng bằng sông Cửu Long là",
    o: ["Điều kiện tự nhiên.", "Trình độ phát triển kinh tế.", "Tính chất của nền kinh tế.", "Lịch sử khai thác lãnh thổ."],
    a: 3,
    explain: "Lịch sử khai thác lãnh thổ lâu đời làm ĐBSH có mật độ dân số cao hơn ĐBSCL."
  },
  {
    type: "abcd",
    q: "Dân số nước ta đông không tạo thuận lợi nào dưới đây?",
    o: ["Nguồn lao động dồi dào.", "Thị trường tiêu thụ rộng lớn.", "Thu hút nhiều vốn đầu tư.", "Trình độ đào tạo được nâng cao."],
    a: 3,
    explain: "Dân số đông không tự động nâng cao trình độ đào tạo — đây không phải thuận lợi trực tiếp."
  },
  {
    type: "abcd",
    q: "Dân số nước ta tăng nhanh gây hệ quả nào sau đây?",
    o: ["Quá trình đô thị hóa diễn ra nhanh.", "Nguồn lao động đông, tăng nhanh.", "Gây sức ép đến kinh tế, xã hội, môi trường.", "Đẩy nhanh quá trình hội nhập với thế giới."],
    a: 2,
    explain: "Dân số tăng nhanh gây sức ép lớn đến kinh tế, xã hội và môi trường."
  },
  {
    type: "abcd",
    q: "Dân số nước ta tăng nhanh không mang lại hệ quả nào sau đây?",
    o: ["Nguồn lao động dồi dào.", "Thị trường tiêu thụ rộng.", "Lao động bổ sung nhiều.", "Chất lượng cuộc sống cao."],
    a: 3,
    explain: "Dân số tăng nhanh thường làm giảm chất lượng cuộc sống, không phải tăng."
  },
  {
    type: "abcd",
    q: "Vùng nào sau đây có mật độ dân số cao nhất nước ta?",
    o: ["Đồng bằng sông Hồng.", "Đồng bằng sông Cửu Long.", "Nam Trung Bộ.", "Đông Nam Bộ."],
    a: 0,
    explain: "Đồng bằng sông Hồng có mật độ dân số cao nhất cả nước."
  },
  {
    type: "abcd",
    q: "Dân số Việt Nam đứng thứ ba Đông Nam Á sau các quốc gia nào sau đây?",
    o: ["In-đô-nê-xi-a và Phi-lip-pin.", "In-đô-nê-xi-a và Ma-lai-xi-a.", "In-đô-nê-xi-a và Thái Lan.", "In-đô-nê-xi-a và Mi-an-ma."],
    a: 0,
    explain: "Dân số Việt Nam đứng thứ 3 Đông Nam Á, sau Indonesia và Philippines."
  }
);
/* ===== PHẦN 2: 6 CÂU ĐÚNG/SAI ===== */
window.DIA_ALL.push(
  {
    type: "dungsai",
    q: "Câu 1: Cho thông tin sau: Từ Đông sang Tây, thiên nhiên nước ta có sự phân hóa thành ba vùng chính: vùng biển và thềm lục địa, vùng đồng bằng, vùng đồi núi. Trong nội bộ từng vùng, thiên nhiên nước ta cũng có sự phân hóa sâu sắc.",
    statements: [
      { text: "Thềm lục địa của nước ta hẹp nhất ở vùng biển thuộc khu vực Bắc Trung Bộ.", answer: true },
      { text: "Vùng đồng bằng Bắc Bộ và đồng bằng Nam Bộ có diện tích rộng lớn, thiên nhiên trù phú.", answer: true },
      { text: "Thiên nhiên ở vùng núi Đông Bắc mang sắc thái của vùng có khí hậu nhiệt đới ẩm gió mùa chủ yếu do tác động của bức chắn địa hình dãy Hoàng Liên Sơn.", answer: false },
      { text: "Thiên nhiên của vùng núi cao Tây Bắc mang sắc thái của vùng có khí hậu cận nhiệt đới ẩm gió mùa chủ yếu do tác động kết hợp của độ cao địa hình và gió mùa Đông Bắc.", answer: true }
    ]
  },
  {
    type: "dungsai",
    q: "Câu 2: Cho thông tin sau: Nước ta có lượng mưa trung bình năm khá lớn, dao động khoảng 1500 - 2000 mm, phản ánh rõ nét tính chất ẩm của khí hậu Việt Nam. Tuy nhiên, lượng mưa có sự phân hóa mạnh giữa các khu vực do ảnh hưởng của địa hình và chế độ gió mùa. Mùa mưa ở Nam Bộ thường kéo dài từ khoảng tháng 5 đến tháng 11.",
    statements: [
      { text: "Nam Bộ có mùa mưa lệch pha so với Bắc Bộ, mùa mưa ở Nam Bộ kéo dài hơn Bắc Bộ.", answer: true },
      { text: "Đỉnh mưa ở Nam Bộ thường vào đầu mùa hạ, vì đây là thời điểm gió mùa Tây Nam mạnh nhất.", answer: false },
      { text: "Nam Bộ có mùa mưa kéo dài vì gió mùa Tây Nam duy trì ổn định liên tục từ đầu mùa đến cuối mùa.", answer: true },
      { text: "Trong mùa mưa, số ngày mưa ở Nam Bộ nhiều hơn Bắc Bộ vì Nam Bộ có nền nhiệt ổn định, thuận lợi cho đối lưu phát triển mạnh và liên tục.", answer: true }
    ]
  },
  {
    type: "dungsai",
    q: "Câu 3: Cho thông tin sau: Tình trạng suy giảm tài nguyên nước ở Việt Nam là một vấn đề đáng báo động. Nguồn nước mặt (sông, hồ) ở nhiều nơi đang bị suy giảm và ô nhiễm. Nguồn nước ngầm ở một số khu vực bị hạ thấp đáng kể. Ở nhiều nơi, đặc biệt là Đồng bằng sông Cửu Long thường xảy ra tình trạng thiếu nước ngọt cho sinh hoạt và sản xuất vào mùa khô.",
    statements: [
      { text: "Tài nguyên nước ở nước ta hiện nay đang bị suy giảm cả về số lượng và chất lượng.", answer: true },
      { text: "Đồng bằng sông Cửu Long là khu vực chịu ảnh hưởng nặng nhất bởi tình trạng thiếu nước ngọt vào mùa khô.", answer: true },
      { text: "Biến đổi khí hậu là nguyên nhân duy nhất dẫn đến tình trạng suy giảm tài nguyên nước.", answer: false },
      { text: "Xây dựng các hồ chứa nước là giải pháp quan trọng để điều tiết nguồn nước mặt giữa các mùa trong năm.", answer: true }
    ]
  },
  {
    type: "dungsai",
    q: "Câu 4: Cho thông tin sau: Nằm hoàn toàn trong vùng nội chí tuyến ở bán cầu Bắc và chịu ảnh hưởng sâu sắc của các khối khí hoạt động theo mùa, Việt Nam sở hữu thiên nhiên mang tính chất nhiệt đới ẩm gió mùa điển hình. Vị trí tiếp giáp Biển Đông rộng lớn cùng với sự giao thoa của các luồng di cư sinh vật từ nhiều hướng đã tạo nên nguồn tài nguyên thiên nhiên phong phú và tính đa dạng sinh học cao.",
    statements: [
      { text: "Vị trí nằm trong vùng nội chí tuyến bán cầu Bắc quy định tính chất nhiệt đới của thiên nhiên nước ta.", answer: true },
      { text: "Sự kết hợp giữa vị trí nội chí tuyến và tác động của Biển Đông giúp thiên nhiên nước ta giữ được độ ẩm cao, không bị khô hạn như một số khu vực cùng vĩ độ ở Bắc Phi.", answer: true },
      { text: "Tài nguyên sinh học đa dạng là một điều kiện thuận lợi để nước ta đa dạng hóa cơ cấu giống cây trồng vật nuôi.", answer: true },
      { text: "Do nằm hoàn toàn trong vùng khí hậu nhiệt đới gió mùa nên khí hậu của nước ta có sự phân hóa sâu sắc với một mùa hạ nóng ẩm và một mùa đông lạnh, khô.", answer: false }
    ]
  },
  {
    type: "dungsai",
    q: "Câu 5: Cho thông tin sau: Thiên nhiên nhiệt đới ẩm gió mùa ở nước ta thể hiện rõ rệt qua các thành phần tự nhiên. Khí hậu có nền nhiệt ẩm cao, lượng mưa lớn và chịu tác động sâu sắc của các khối khí hoạt động theo mùa. Quá trình phong hóa, xâm thực diễn ra mạnh mẽ ở vùng đồi núi, cung cấp lượng phù sa dồi dào bồi tụ nên các đồng bằng châu thổ rộng lớn.",
    statements: [
      { text: "Quá trình phong hóa hóa học diễn ra mạnh mẽ ở vùng đồi núi đá vôi nước ta.", answer: true },
      { text: "Mạng lưới sông ngòi nước ta có đặc điểm ít nước, nghèo phù sa và dòng chảy thay đổi theo mùa.", answer: false },
      { text: "Quá trình feralit là quá trình hình thành đất đặc trưng ở vùng đồi núi thấp của nước ta.", answer: true },
      { text: "Khí hậu nhiệt đới ẩm gió mùa có sự phân hóa tạo điều kiện thuận lợi để nông nghiệp nước ta đa dạng hóa cơ cấu cây trồng, vật nuôi và cơ cấu mùa vụ.", answer: true }
    ]
  },
  {
    type: "dungsai",
    q: "Câu 6: Cho thông tin sau: Tài nguyên thiên nhiên ở nước ta phong phú nhưng đang chịu áp lực lớn từ hoạt động phát triển kinh tế. Sự suy giảm tài nguyên sinh vật biểu hiện rõ qua sự thu hẹp diện tích rừng tự nhiên và suy giảm đa dạng sinh học. Nhiều loài thực vật và động vật hoang dã đối mặt với nguy cơ tuyệt chủng, làm ảnh hưởng nghiêm trọng đến cân bằng sinh thái.",
    statements: [
      { text: "Sự suy giảm tài nguyên sinh vật ở nước ta biểu hiện rõ rệt qua sự giảm sút diện tích rừng tự nhiên và suy giảm đa dạng sinh học.", answer: true },
      { text: "Khai thác quá mức, đốt rừng làm nương rẫy là những nguyên nhân do con người làm suy giảm tài nguyên sinh vật.", answer: true },
      { text: "Tổng diện tích rừng có xu hướng phục hồi và phần lớn rừng mới trồng có đa dạng sinh học cao.", answer: false },
      { text: "Việc rừng tự nhiên bị suy giảm làm giảm khả năng giữ nước của thảm thực vật, dẫn đến tình trạng cạn kiệt nguồn nước ngầm và gia tăng nguy cơ lũ lụt ở hạ lưu.", answer: true }
    ]
  }
);
/* ===== PHẦN 3: 8 CÂU TRẢ LỜI NGẮN ===== */
window.DIA_ALL.push(
  {
    type: "tlngan",
    q: "Nước ta có 21 tỉnh/thành phố giáp biển. Hãy cho biết số tỉnh/thành phố giáp biển chiếm bao nhiêu % số tỉnh/thành của nước ta? (làm tròn kết quả đến một chữ số thập phân)",
    hint: "Nước ta hiện có 34 tỉnh/thành phố (sau sáp nhập 2025)",
    accept: ["61.8", "61,8"],
    explain: "21 / 34 × 100 = 61,8%"
  },
  {
    type: "tlngan",
    q: "Cho bảng số liệu nhiệt độ trung bình các tháng năm 2024 tại Lai Châu (°C): T1: 14,8 / T2: 18,1 / T3: 19,4 / T4: 25,3 / T5: 23,0 / T6: 23,7 / T7: 24,2 / T8: 23,3 / T9: 23,8 / T10: 21,4 / T11: 18,6 / T12: 14,6. Biên độ nhiệt độ trung bình năm 2024 tại Lai Châu là bao nhiêu °C? (làm tròn đến một chữ số thập phân)",
    hint: "Biên độ = Nhiệt độ cao nhất - Nhiệt độ thấp nhất",
    accept: ["10.7", "10,7"],
    explain: "Max = 25,3°C (tháng 4); Min = 14,6°C (tháng 12) → Biên độ = 25,3 - 14,6 = 10,7°C"
  },
  {
    type: "tlngan",
    q: "Cho bảng số liệu nhiệt độ trung bình tại Sơn La (2015-2024): 2015: 22,30°C / 2020: 22,20°C / 2022: 21,58°C / 2024: 22,55°C. Nhiệt độ trung bình của các năm trên tại Sơn La là bao nhiêu °C? (làm tròn đến một chữ số thập phân)",
    hint: "Tính trung bình cộng của 4 năm",
    accept: ["22.2", "22,2"],
    explain: "(22,30 + 22,20 + 21,58 + 22,55) / 4 = 22,1575 ≈ 22,2°C"
  },
  {
    type: "tlngan",
    q: "Cho bảng số liệu nhiệt độ trung bình các tháng năm 2024 tại Đà Lạt (°C): T1: 17,2 / T2: 18,3 / T3: 19,6 / T4: 20,9 / T5: 21,0 / T6: 20,4 / T7: 19,2 / T8: 19,9 / T9: 19,5 / T10: 19,1 / T11: 18,7 / T12: 17,4. Biên độ nhiệt độ trung bình năm 2024 tại Đà Lạt là bao nhiêu °C? (làm tròn đến một chữ số thập phân)",
    hint: "Biên độ = Max - Min",
    accept: ["3.8", "3,8"],
    explain: "Max = 21,0°C (tháng 5); Min = 17,2°C (tháng 1) → Biên độ = 21,0 - 17,2 = 3,8°C"
  },
  {
    type: "tlngan",
    q: "Cho bảng số liệu lượng mưa các tháng tại Huế năm 2024 (mm): T1: 91,3 / T2: 11,3 / T3: 38,6 / T4: 6,6 / T5: 237,1 / T6: 91,1 / T7: 197,8 / T8: 93,5 / T9: 527,5 / T10: 960,5 / T11: 787,6 / T12: 644,0. Tổng lượng mưa của Huế năm 2024 là bao nhiêu mm? (làm tròn đến hàng đơn vị)",
    hint: "Cộng tất cả 12 tháng",
    accept: ["3687"],
    explain: "Tổng = 91,3 + 11,3 + 38,6 + 6,6 + 237,1 + 91,1 + 197,8 + 93,5 + 527,5 + 960,5 + 787,6 + 644,0 ≈ 3687 mm"
  },
  {
    type: "tlngan",
    q: "Cũng với bảng số liệu Huế 2024 ở trên, sự chênh lệch lượng mưa giữa tháng có lượng mưa cao nhất và tháng có lượng mưa thấp nhất ở Huế là bao nhiêu mm? (làm tròn đến hàng đơn vị)",
    hint: "Tìm max và min trong 12 tháng",
    accept: ["954"],
    explain: "Max = 960,5 (T10); Min = 6,6 (T4) → Chênh lệch = 960,5 - 6,6 = 953,9 ≈ 954 mm"
  },
  {
    type: "tlngan",
    q: "Ở độ cao 100m thuộc sườn đón gió trên dãy núi Bi Doup có nhiệt độ là 23°C. Hỏi ở độ cao 150m thuộc sườn khuất gió trên dãy núi Bi Doup có nhiệt độ là bao nhiêu °C? (biết đỉnh núi Bi Doup cao 2287m; làm tròn đến một chữ số thập phân)",
    hint: "Lên cao 100m giảm 0,6°C. Xuống thấp 100m tăng 1°C",
    accept: ["31.2", "31,2"],
    explain: "Lên đỉnh: 23 - (2287-100)×0,6/100 = 9,878°C. Xuống 150m: 9,878 + (2287-150)×1/100 = 31,248 ≈ 31,2°C"
  },
  {
    type: "tlngan",
    q: "Năm 2024, tổng dân số của nước ta là 101343,8 nghìn người, số dân nam là 50576,9 nghìn người. Hãy cho biết tỉ lệ nữ là bao nhiêu %? (làm tròn đến một chữ số thập phân)",
    hint: "Số nữ = Tổng - Số nam",
    accept: ["50.1", "50,1"],
    explain: "Số nữ = 101343,8 - 50576,9 = 50766,9 (nghìn người). Tỉ lệ nữ = 50766,9 / 101343,8 × 100 ≈ 50,1%"
  }
);
window.ON_TAP_DATA = window.QUESTIONS = window.DIA_ALL;
