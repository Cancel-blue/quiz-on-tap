/* ===== SINH HỌC 12 - ÔN TẬP GIỮA KÌ 1 ===== */
window.SINH_ALL = [];

/* ===== PHẦN 1: 22 CÂU TRẮC NGHIỆM ABCD ===== */
window.SINH_ALL.push(
  {
    type: "abcd",
    q: "Chức năng truyền thông tin di truyền của DNA được thực hiện chủ yếu bởi đặc điểm là",
    o: ["Hai mạch đơn của DNA liên kết với nhau bằng liên kết hydrogen theo nguyên tắc bổ sung.", "Các nucleotide trên DNA có khả năng biến đổi thành nucleotide loại khác.", "DNA có cấu trúc đa phân với đơn phân là các nucleotide A, T, G, C.", "Trình tự nucleotide của DNA quyết định trình tự nucleotide của RNA và trình tự amino acid của chuỗi polypeptide tương ứng."],
    a: 3,
    explain: "Trình tự các nucleotide trên DNA quy định trình tự các nucleotide trên RNA và trình tự các amino acid trong protein."
  },
  {
    type: "abcd",
    q: "Yếu tố nào sau đây đảm bảo sự chính xác cho sự truyền đạt thông tin di truyền từ DNA sang mRNA và protein?",
    o: ["Sự sao chép chỉ theo một chiều 5' - 3'.", "Sự tham gia kết hợp các loại enzyme.", "Sự phổ biến và đặc hiệu của mã di truyền.", "Sự liên kết bổ sung của các nucleotide."],
    a: 3,
    explain: "Nguyên tắc bổ sung (A-T, G-C trong sao mã; A-U, G-C trong dịch mã) đảm bảo thông tin được truyền chính xác."
  },
  {
    type: "abcd",
    q: "Một đoạn trình tự nucleotide trên DNA mang thông tin di truyền mã hóa RNA hoặc chuỗi polypeptide được gọi là",
    o: ["Protein.", "Gene.", "Mã di truyền.", "Codon."],
    a: 1,
    explain: "Gene là một đoạn phân tử DNA mang thông tin quy định một loại sản phẩm là RNA hoặc polypeptide."
  },
  {
    type: "abcd",
    q: "Gene là (1) mang thông tin di truyền quy định một loại sản phẩm là (2). Nội dung phù hợp điền vào vị trí (1) và (2) lần lượt là",
    o: ["một đoạn phân tử DNA; RNA hoặc polypeptide.", "một đoạn phân tử DNA; chuỗi polypeptide.", "một đoạn phân tử DNA; RNA.", "toàn bộ phân tử DNA; RNA hoặc polypeptide."],
    a: 0,
    explain: "Theo khái niệm SGK: Gene là một đoạn phân tử DNA mang thông tin quy định một loại sản phẩm là RNA hoặc chuỗi polypeptide."
  },
  {
    type: "abcd",
    q: "Cấu trúc điển hình của gene bao gồm:",
    o: ["vùng điều hòa, vùng mã hóa và vùng kết thúc.", "vùng cấu trúc, vùng mã hóa và vùng kết thúc.", "vùng khởi động, vùng vận hành và vùng cấu trúc.", "vùng khởi động, vùng mã hóa và vùng kết thúc."],
    a: 0,
    explain: "Cấu trúc chung của gene cấu trúc gồm 3 vùng: Vùng điều hòa (nằm ở đầu 3' mạch mã gốc), vùng mã hóa và vùng kết thúc."
  },
  {
    type: "abcd",
    q: "Dịch mã là",
    o: ["quá trình tổng hợp RNA dựa trên trình tự nucleotide của DNA.", "quá trình tổng hợp chuỗi polypeptide dựa trên trình tự nucleotide trên bản phiên mã của gene (mRNA).", "quá trình tạo 2 phân tử DNA mới giống như DNA ban đầu.", "quá trình tổng hợp mRNA dựa trên trình tự nucleotide của chuỗi polypeptide."],
    a: 1,
    explain: "Dịch mã là quá trình tổng hợp chuỗi polypeptide từ thông tin trên mRNA."
  },
  {
    type: "abcd",
    q: "Phân tử nào sau đây có chức năng vận chuyển amino acid tới ribosome tham gia dịch mã?",
    o: ["DNA.", "mRNA.", "rRNA.", "tRNA."],
    a: 3,
    explain: "tRNA (RNA vận chuyển) làm nhiệm vụ mang các amino acid tương ứng đến ribosome."
  },
  {
    type: "abcd",
    q: "Loại phân tử nào được dùng làm khuôn để tổng hợp nên protein?",
    o: ["DNA.", "mRNA.", "tRNA.", "rRNA."],
    a: 1,
    explain: "mRNA là bản phiên mã mang thông tin di truyền và làm khuôn cho quá trình dịch mã tổng hợp protein."
  },
  {
    type: "abcd",
    q: "Đặc điểm sau đây không phải là đặc điểm của mã di truyền?",
    o: ["Mã di truyền là mã bộ ba.", "Được đọc liên tục theo từng cụm 3 nu không gối lên nhau.", "Có tính đặc trưng cho mỗi loài.", "Nhiều bộ ba có thể mã hoá cùng một loại amino acid."],
    a: 2,
    explain: "Mã di truyền có tính phổ biến (hầu hết các loài dùng chung bộ mã), không có tính đặc trưng cho loài."
  },
  {
    type: "abcd",
    q: "Ứng dụng nào sau đây là ứng dụng của giải mã hệ gene người trong y học?",
    o: ["Xác định mối quan hệ họ hàng giữa các loài sinh vật.", "Nghiên cứu cấu trúc và chức năng của các gene.", "Giảm định mối quan hệ huyết thống giữa thân nhân.", "Đề xuất biện pháp phòng và điều trị bệnh di truyền."],
    a: 3,
    explain: "Giải mã hệ gene người giúp xác định các gene gây bệnh, từ đó đề xuất biện pháp phòng và điều trị bệnh di truyền."
  },
  {
    type: "abcd",
    q: "Hệ gene của sinh vật nhân thực bao gồm tập hợp các phân tử DNA",
    o: ["trên NST trong nhân tế bào và trong bào quan ti thể, lục lạp.", "có dạng vòng trong vùng nhân và plasmid.", "trên NST trong nhân tế bào.", "trong tế bào chất của tế bào."],
    a: 0,
    explain: "Tế bào nhân thực có DNA trong nhân và cả trong các bào quan như ti thể, lục lạp."
  },
  {
    type: "abcd",
    q: "Giống lúa “gạo vàng” được tạo ra do chuyển gene tổng hợp beta carotene là thành tựu của",
    o: ["nhân bản vô tính.", "công nghệ tế bào.", "công nghệ gene.", "phương pháp gây đột biến."],
    a: 2,
    explain: "Đây là thành tựu của công nghệ gene (chuyển gene quy định tổng hợp beta-carotene vào cây lúa)."
  },
  {
    type: "abcd",
    q: "Năm 2012, các nhà khoa học tại Đại học Wyoming (Mỹ) đã sử dụng công nghệ gene để tạo ra những con dê biến đổi gene có khả năng tiết ra protein tơ nhện trong sữa. Họ đã chèn gene mã hóa protein tơ nhện vào bộ gene của dê. Trong quá trình tạo ra dê có khả năng tiết protein tơ nhện trong sữa, loại công nghệ sinh học nào sau đây được sử dụng?",
    o: ["Lai giống truyền thống.", "Cấy truyền phôi.", "Công nghệ gene.", "Nuôi cấy mô tế bào."],
    a: 2,
    explain: "Việc chèn gene ngoại lai vào bộ gene của dê là ứng dụng của công nghệ gene (kỹ thuật chuyển gene)."
  },
  {
    type: "abcd",
    q: "Nhận định nào sau đây là sai khi nói về thành tựu của công nghệ gene?",
    o: ["Tạo được giống bông kháng sâu bệnh bằng cách chuyển gene từ sâu tơ vì khuẩn vào cây bông.", "Tạo ra giống lúa “gạo vàng” có khả năng tổng hợp β - carotene.", "Tạo giống dâu tằm tam bội có năng suất lá cao.", "Tạo chủng vi khuẩn E.coli có khả năng sản xuất insulin của người."],
    a: 2,
    explain: "Tạo giống dâu tằm tam bội là thành tựu của phương pháp gây đột biến đa bội, không phải công nghệ gene."
  },
  {
    type: "abcd",
    q: "Tế bào vi khuẩn E.coli phải dùng tới 90% số ATP mà tế bào tạo ra để tổng hợp protein. Nhờ có sự điều hòa biểu hiện gene, tế bào chỉ tổng hợp sản phẩm của gene khi cần thiết. Ý nghĩa của điều hòa biểu hiện gene trong trường hợp trên là",
    o: ["Đảm bảo tế bào vi khuẩn thích nghi được với sự thay đổi của môi trường.", "Tiết kiệm năng lượng cho quá trình tổng hợp và chuyển hóa các chất.", "Đảm bảo tính chính xác trong quá trình phát triển của tế bào vi khuẩn E.coli.", "Kiểm soát, sửa chữa những đột biến xảy ra trong tế bào vi khuẩn E.coli."],
    a: 1,
    explain: "Việc tổng hợp protein tiêu tốn rất nhiều ATP. Điều hòa biểu hiện gene giúp tế bào chỉ tổng hợp khi cần, tiết kiệm năng lượng."
  },
  {
    type: "abcd",
    q: "Thuốc Tamoxifen ức chế dịch hiệu thụ thể estrogen alpha để chữa ung thư vú do gene biểu hiện quá mức là ứng dụng của điều hòa biểu hiện gene trong lĩnh vực",
    o: ["nghiên cứu di truyền.", "trồng trọt.", "chăn nuôi.", "y dược."],
    a: 3,
    explain: "Đây là ứng dụng trong y học (y dược) để điều trị bệnh ung thư."
  },
  {
    type: "abcd",
    q: "Điều hòa biểu hiện gene chính là",
    o: ["kiểm soát quá trình dịch mã.", "kiểm soát quá trình tạo sản phẩm của gene.", "kiểm soát quá trình phiên mã.", "điều hoà hoạt động nhân đôi DNA."],
    a: 1,
    explain: "Điều hòa biểu hiện gene là điều hòa lượng sản phẩm của gene được tạo ra (có thể ở mức phiên mã hoặc dịch mã)."
  },
  {
    type: "abcd",
    q: "Ý nghĩa sinh học của quá trình điều hòa hoạt động gene là",
    o: ["Làm cho gene luôn phiên mã để tạo ra nhiều protein phục vụ tế bào.", "Giúp tế bào tổng hợp tất cả các loại protein cùng một lúc để tiết kiệm thời gian.", "Đảm bảo cho hoạt động sống của tế bào diễn ra hài hòa và thích nghi kịp thời với điều kiện môi trường.", "Làm tăng tốc độ nhân đôi của phân tử DNA trong nhân tế bào."],
    a: 2,
    explain: "Điều hòa hoạt động gene giúp tế bào thích nghi với môi trường và hoạt động sống hài hòa, tiết kiệm năng lượng."
  },
  {
    type: "abcd",
    q: "Đột biến gene là",
    o: ["Là những cá thể mang đột biến đã biểu hiện trên kiểu hình của cơ thể.", "Là những biến đổi trong cấu trúc của gene, liên quan tới một hoặc một số cặp nucleotide, xảy ra tại một điểm nào đó của phân tử DNA.", "Là những biến đổi trong vật liệu di truyền, xảy ra ở cấp độ phân tử DNA hoặc cấp độ tế bào (NST).", "Là sự tổ hợp lại vật chất di truyền vốn có ở bố mẹ trong quá trình thụ tinh."],
    a: 1,
    explain: "Đột biến gene là những biến đổi trong cấu trúc của gene (liên quan đến một hoặc một số cặp nucleotide)."
  },
  {
    type: "abcd",
    q: "Những biến đổi trong cấu trúc của gene, liên quan đến một cặp nucleotide trong gene được gọi là",
    o: ["Allele mới.", "Đột biến gene.", "Đột biến điểm.", "Thể đột biến."],
    a: 2,
    explain: "Đột biến điểm là dạng đột biến gene chỉ liên quan đến một cặp nucleotide."
  },
  {
    type: "abcd",
    q: "Có bao nhiêu phát biểu dưới đây đúng khi nói về vai trò của đột biến gene? (1). luôn gây hại cho sinh vật vì làm biến đổi cấu trúc của gene. (2). là nguồn nguyên liệu cho quá trình chọn giống và tiến hoá. (3). có thể làm cho sinh vật ngày càng đa dạng, phong phú. (4). có thể có lợi hoặc có hại hoặc trung tính. (5). Đột biến gene có thể tạo ra các allele mới làm phong phú thêm vốn gene trong quần thể.",
    o: ["1.", "2.", "3.", "4."],
    a: 3,
    explain: "Các phát biểu đúng là (2), (3), (4), (5). Phát biểu (1) sai vì đột biến gene có thể có lợi, có hại hoặc trung tính."
  },
  {
    type: "abcd",
    q: "Khi nói về nhiễm sắc thể ở tế bào nhân thực, phát biểu nào sau đây đúng?",
    o: ["Đơn vị cấu trúc cơ bản của nhiễm sắc thể là nuclêôxôm.", "Nhiễm sắc thể là vật chất di truyền ở cấp độ phân tử.", "Thành phần hóa học chủ yếu của nhiễm sắc thể là RNA và prôtêin.", "Cấu trúc cuộn xoắn tạo điều kiện cho sự nhân đôi nhiễm sắc thể."],
    a: 0,
    explain: "Đơn vị cấu trúc cơ bản của NST là nucleosome (gồm 8 phân tử histone và 146 cặp nu)."
  }
);
/* ===== PHẦN 2: 6 CÂU ĐÚNG/SAI ===== */
window.SINH_ALL.push(
  {
    type: "dungsai",
    q: "Câu 1: Dưới đây là sơ đồ khái quát cấu trúc một gene ở sinh vật nhân sơ (a) và sinh vật nhân thực (b). Các nhận định sau đây là đúng hay sai?",
    statements: [
      { text: "Một gene có cấu trúc gồm vùng điều hòa, vùng mã hoá và vùng kết thúc.", answer: true },
      { text: "Hình b gene phân mảnh là gene có vùng mã hóa gồm các trình tự được dịch mã (exon) xen kẽ các đoạn không được dịch mã (intron).", answer: true },
      { text: "Hình a là gene có ở sinh vật nhân sơ.", answer: true },
      { text: "Exon là trình tự nucleotide được phiên mã nhưng không được dịch mã để tổng hợp acid amino.", answer: false }
    ]
  },
  {
    type: "dungsai",
    q: "Câu 2: Hình dưới đây minh họa một số loại RNA: (a) một đoạn mRNA; (b) tRNA; (c) rRNA. Dựa vào hình bên dưới hãy cho biết các kết luận dưới đây là đúng hay sai?",
    statements: [
      { text: "RNA được cấu tạo từ các loại nucleotide: Adenine (A), Uracil (U), Guanine (G) và Cytosine (C).", answer: true },
      { text: "Cả ba loại RNA (mRNA, tRNA, rRNA) có cấu trúc mạch đơn polynucleotide và đều tham gia vào quá trình dịch mã.", answer: true },
      { text: "rRNA có chức năng truyền thông tin di truyền từ gene đến protein.", answer: false },
      { text: "mRNA có chức năng vận chuyển một loại amino acid tới ribosome khi dịch mã.", answer: false }
    ]
  },
  {
    type: "dungsai",
    q: "Câu 3: Hình dưới đây mô tả các giai đoạn phiên mã, hãy cho biết các nhận định dưới đây là đúng hay sai?",
    statements: [
      { text: "Trong quá trình này, enzyme RNA polymerase bám vào vùng khởi động của gene và di chuyển trên mạch khuôn.", answer: true },
      { text: "Enzyme RNA polymerase trượt dọc theo mạch gốc trên gene theo chiều 3' → 5', để tổng hợp RNA có chiều 3' → 5'.", answer: false },
      { text: "Khi kết thúc quá trình phiên mã tạo ra mRNA có thể được dịch mã ngay.", answer: false },
      { text: "Ở sinh vật nhân thực, gene có vùng mã hóa không liên tục (gene phân mảnh).", answer: true }
    ]
  },
  {
    type: "dungsai",
    q: "Câu 4: Hình sau đây mô tả một cấu trúc trong nhân tế bào. Mỗi nhận định sau đây là Đúng hay Sai?",
    statements: [
      { text: "Cấu trúc 1 được thấy ở kì giữa của quá trình nguyên phân, cấu tạo gồm 2 chuỗi polynucleotide.", answer: false },
      { text: "Cấu trúc 3 và 4 đều được cấu tạo theo nguyên tắc đa phân, đơn phân là các nucleotide.", answer: false },
      { text: "Cấu trúc A, B, C, D có đường kính lần lượt là 10 nm, 30 nm, 700 nm, 350 nm.", answer: false },
      { text: "Cấu trúc A, B xuất hiện ở kì trung gian, cấu trúc C xuất hiện khi tế bào ở kỳ giữa nguyên phân.", answer: true }
    ]
  },
  {
    type: "dungsai",
    q: "Câu 5: Hình dưới đây là cơ sở tế bào học của quy luật phân li của Mendel. Dựa vào thông tin của hình hãy cho biết các nhận định dưới đây là đúng hay sai?",
    statements: [
      { text: "Phép lai nghiên cứu một tính trạng màu hoa với hai trạng thái là hoa đỏ và hoa trắng.", answer: false },
      { text: "Sự vận động của gene gắn với sự vận động của nhiễm sắc thể trong cơ chế nguyên phân, giảm phân và thụ tinh.", answer: true },
      { text: "Sự phân li của các nhiễm sắc thể trong giảm phân dẫn tới mỗi giao tử chỉ mang một allele của cặp.", answer: true },
      { text: "Ở thế hệ lai F1: 100% cây hoa tím có kiểu gene đồng hợp, biểu hiện tính trạng trội.", answer: false }
    ]
  },
  {
    type: "dungsai",
    q: "Câu 7: Thí nghiệm của Mendel: Pt/c: cây hạt vàng, vỏ trơn X cây hạt xanh, vỏ nhăn. Theo lí thuyết, nhận định nào sau đây đúng hay sai?",
    statements: [
      { text: "Đây là phép lai 2 tính trạng của Mendel, mỗi tính trạng do 1 cặp nhân tố di truyền quy định.", answer: true },
      { text: "Kiểu gen F1: 100% AaBb.", answer: true },
      { text: "F2 có tỉ lệ kiểu hình là 3:3:1:1.", answer: false },
      { text: "F2: những cây hạt vàng, vỏ trơn có 3 kiểu gene; những cây hạt vàng, vỏ nhăn có 2 kiểu gene, những cây hạt xanh, vỏ trơn có 3 kiểu gene và những cây hạt xanh, vỏ nhăn có 1 kiểu gene.", answer: false }
    ]
  }
);
/* ===== PHẦN 3: 8 CÂU TRẢ LỜI NGẮN ===== */
window.SINH_ALL.push(
  {
    type: "tlngan",
    q: "Một gene có 480 nu loại adenine và 320 Nu loại Guanine. Gene đó có số lượng nucleotide là bao nhiêu?",
    hint: "Áp dụng công thức: Tổng số nu N = 2A + 2G",
    accept: ["1600"],
    explain: "Tổng số nucleotide N = 2A + 2G = 2×480 + 2×320 = 1600 (nu)."
  },
  {
    type: "tlngan",
    q: "Cho các thành phần sau: 1. DNA. 2. mRNA. 3. Ribosome. 4. tRNA. 5. RNA polymerase. 6. DNA polymerase. Có bao nhiêu thành phần tham gia trực tiếp vào quá trình dịch mã?",
    hint: "Dịch mã là quá trình tổng hợp protein, diễn ra ở tế bào chất.",
    accept: ["3"],
    explain: "Các thành phần tham gia trực tiếp vào dịch mã gồm: mRNA (khuôn), Ribosome (nơi tổng hợp) và tRNA (vận chuyển axit amin). Vậy có 3 thành phần."
  },
  {
    type: "tlngan",
    q: "Hình bên minh họa cơ chế di truyền ở sinh vật nhân sơ, (1) và (2) là kí hiệu các quá trình của cơ chế này. Số mấy thể hiện quá trình dịch mã?",
    hint: "Quá trình tạo ra chuỗi polypeptide từ mRNA là dịch mã.",
    accept: ["2"],
    explain: "Quá trình (1) tạo ra mRNA là phiên mã. Quá trình (2) tạo ra chuỗi polypeptide là dịch mã. Vậy số 2 thể hiện quá trình dịch mã."
  },
  {
    type: "tlngan",
    q: "Cơ thể mang kiểu gene BbDd khi giảm phân bình thường cho mấy loại giao tử?",
    hint: "Số loại giao tử = 2^n (n là số cặp gen dị hợp).",
    accept: ["4"],
    explain: "Cơ thể BbDd có 2 cặp gen dị hợp, giảm phân cho 2^2 = 4 loại giao tử (BD, Bd, bD, bd)."
  },
  {
    type: "tlngan",
    q: "Theo lí thuyết, quá trình giảm phân bình thường ở cơ thể có kiểu gene AaBbDd tạo ra tối đa bao nhiêu loại giao tử?",
    hint: "Số loại giao tử = 2^n (n là số cặp gen dị hợp).",
    accept: ["8"],
    explain: "Cơ thể AaBbDd có 3 cặp gen dị hợp, tạo ra 2^3 = 8 loại giao tử."
  },
  {
    type: "tlngan",
    q: "Ở cà chua, allele A quy định quả đỏ trội hoàn toàn so với allele a quy định quả vàng. Cho biết quá trình giảm phân diễn ra bình thường, theo lí thuyết, phép lai Aa × Aa cho đời con có kiểu hình phân li theo tỉ lệ x cây quả đỏ : y cây quả vàng. Giá trị của x và y là bao nhiêu? (giá trị của x, y viết liền, ví dụ: 15, 24,…)",
    hint: "Phép lai Aa x Aa tạo ra đời con có tỉ lệ kiểu hình 3 : 1.",
    accept: ["31"],
    explain: "Phép lai Aa x Aa cho đời con 3/4 quả đỏ : 1/4 quả vàng. Vậy x = 3, y = 1. Viết liền là 31."
  },
  {
    type: "tlngan",
    q: "Ở đậu hà lan, allele A quy định thân cao trội hoàn toàn so với allele a quy định thân thấp. Cây thân cao có thể có mấy loại kiểu gene?",
    hint: "Kiểu hình trội có thể có kiểu gen đồng hợp hoặc dị hợp.",
    accept: ["2"],
    explain: "Cây thân cao (kiểu hình trội) có 2 loại kiểu gene là AA (đồng hợp) và Aa (dị hợp)."
  },
  {
    type: "tlngan",
    q: "Ở đậu hà lan, allele A quy định thân cao trội hoàn toàn so với allele a quy định thân thấp. Cho cây thân cao không thuần chủng lai với cây thân thấp. Đời con có thể có mấy loại kiểu gene?",
    hint: "Cây thân cao không thuần chủng (Aa) lai với cây thân thấp (aa).",
    accept: ["2"],
    explain: "Phép lai Aa x aa cho đời con có 2 loại kiểu gene là Aa (thân cao) và aa (thân thấp)."
  }
);

/* ===== GÁN BIẾN TOÀN CỤC ĐỂ GAME ĐỌC ĐƯỢC ===== */
window.ON_TAP_DATA = window.QUESTIONS = window.SINH_ALL;
