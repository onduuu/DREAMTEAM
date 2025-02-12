const initialPlayers = [
    { name: 'Abdoulaye Gueye', position: 'PF', team: 'Sigortam Net', age: 29, points: 11.07, rebounds: 6.67, assists: 4.49, steals: 1.0, turnovers: 1.7, fouls: 2.1, salary: 1100000, quality: 'B', offense: 65, defense: 68, image: 'images/abdoulaye.jpg' },
    { name: 'Berkay Bayar', position: 'SF', team: 'Sigortam Net', age: 24, points: 5.96, rebounds: 3.96, assists: 2.80, steals: 0.6, turnovers: 1.1, fouls: 1.5, salary: 900000, quality: 'C', offense: 48, defense: 50, image: 'images/berkay.jpg' },
    { name: 'Cihat Mertali Dalgali', position: 'PF', team: 'Sigortam Net', age: 23, points: 4.41, rebounds: 3.17, assists: 2.20, steals: 0.4, turnovers: 0.9, fouls: 1.4, salary: 850000, quality: 'C-', offense: 42, defense: 45, image: 'images/cihat.jpg' },
    { name: 'Doğukan Şanlı', position: 'SG', team: 'Sigortam Net', age: 28, points: 8.00, rebounds: 1.56, assists: 1.25, steals: 0.7, turnovers: 1.2, fouls: 1.5, salary: 950000, quality: 'C+', offense: 55, defense: 52, image: 'images/dogukan.jpg' },
    { name: 'Emir Adıgüzel', position: 'PG', team: 'Sigortam Net', age: 21, points: 3.36, rebounds: 1.69, assists: 1.21, steals: 0.3, turnovers: 0.7, fouls: 1.1, salary: 800000, quality: 'C-', offense: 35, defense: 38, image: 'images/emir.jpg' },
    { name: 'Erdem İlter', position: 'PG', team: 'Sigortam Net', age: 34, points: 8.77, rebounds: 2.98, assists: 2.68, steals: 0.8, turnovers: 1.3, fouls: 1.7, salary: 950000, quality: 'C+', offense: 58, defense: 55, image: 'images/erdem.jpg' },
    { name: 'James Brian Florence', position: 'PG', team: 'Sigortam Net', age: 39, points: 15.31, rebounds: 1.60, assists: 1.26, steals: 1.3, turnovers: 1.8, fouls: 1.9, salary: 1200000, quality: 'A-', offense: 75, defense: 70, image: 'images/james.jpg' },
    { name: 'Kerem Kuthan Konan', position: 'PF', team: 'Sigortam Net', age: 19, points: 0.00, rebounds: 0.00, assists: 0.00, steals: 0.0, turnovers: 0.2, fouls: 0.3, salary: 750000, quality: 'D-', offense: 20, defense: 22, image: 'images/kerem.jpg' },
    { name: 'Keshun Deion Sherrill', position: 'PG', team: 'Sigortam Net', age: 30, points: 17.60, rebounds: 2.70, assists: 2.20, steals: 1.4, turnovers: 2.0, fouls: 2.1, salary: 1100000, quality: 'A-', offense: 80, defense: 75, image: 'images/keshun.jpg' },
    { name: 'Koray Uzunhasan', position: 'PF', team: 'Sigortam Net', age: 32, points: 2.79, rebounds: 2.00, assists: 1.38, steals: 0.3, turnovers: 0.6, fouls: 1.2, salary: 850000, quality: 'C-', offense: 32, defense: 35, image: 'images/koray.jpg' },
    { name: 'Mehmet Özdoğan', position: 'SF', team: 'Sigortam Net', age: 37, points: 2.81, rebounds: 0.65, assists: 0.46, steals: 0.3, turnovers: 0.5, fouls: 0.8, salary: 800000, quality: 'D-', offense: 28, defense: 30, image: 'images/mehmet.jpg' },
    { name: 'Muhammet Engin Kalkan', position: 'PF', team: 'Sigortam Net', age: 24, points: 6.64, rebounds: 3.14, assists: 2.36, steals: 0.6, turnovers: 1.1, fouls: 1.6, salary: 900000, quality: 'C-', offense: 45, defense: 48, image: 'images/muhammet.jpg' },
    { name: 'Samet Yiğitoğlu', position: 'C', team: 'Sigortam Net', age: 20, points: 10.00, rebounds: 7.25, assists: 4.75, steals: 0.9, turnovers: 1.6, fouls: 2.0, salary: 950000, quality: 'B-', offense: 62, defense: 65, image: 'images/samet.jpg' },
    { name: 'Serkan Menteşe', position: 'PG', team: 'Sigortam Net', age: 33, points: 7.16, rebounds: 3.20, assists: 2.38, steals: 0.7, turnovers: 1.2, fouls: 1.6, salary: 850000, quality: 'C', offense: 50, defense: 48, image: 'images/serkan.jpg' },
    { name: 'Yiğit Baran Sarıkaya', position: 'PF', team: 'Sigortam Net', age: 25, points: 8.93, rebounds: 4.75, assists: 3.30, steals: 0.8, turnovers: 1.4, fouls: 1.8, salary: 900000, quality: 'B-', offense: 58, defense: 55, image: 'images/ybs.jpg' },

        // Yalova Spor
{ name: 'Ali Efe Barış', position: 'PG', team: 'Yalova Spor', age: 23, points: 7.91, rebounds: 3.45, assists: 2.76, steals: 0.7, turnovers: 1.3, fouls: 1.7, salary: 900000, quality: 'B-', offense: 55, defense: 52, image: 'images/ali_efe.jpg' },
{ name: 'Andrew Michael Harrison', position: 'PG', team: 'Yalova Spor', age: 29, points: 13.91, rebounds: 3.27, assists: 3.00, steals: 1.2, turnovers: 1.8, fouls: 2.1, salary: 1100000, quality: 'A-', offense: 75, defense: 72, image: 'images/andrew.jpg' },
{ name: 'Berkay Kansu', position: 'SF', team: 'Yalova Spor', age: 27, points: 1.40, rebounds: 1.00, assists: 1.00, steals: 0.2, turnovers: 0.4, fouls: 0.8, salary: 800000, quality: 'D-', offense: 25, defense: 28, image: 'images/kansu.jpg' },
{ name: 'Brandon Cortez Walters', position: 'PF', team: 'Yalova Spor', age: 29, points: 19.85, rebounds: 8.76, assists: 6.03, steals: 1.6, turnovers: 2.3, fouls: 2.5, salary: 1200000, quality: 'S+', offense: 85, defense: 82, image: 'images/brandon.jpg' },
{ name: 'Ege Özçelik', position: 'PF', team: 'Yalova Spor', age: 21, points: 4.13, rebounds: 1.33, assists: 0.92, steals: 0.4, turnovers: 0.7, fouls: 1.1, salary: 850000, quality: 'D+', offense: 35, defense: 38, image: 'images/ege.jpg' },
{ name: 'Eren Özen', position: 'SF', team: 'Yalova Spor', age: 21, points: 1.75, rebounds: 1.50, assists: 0.50, steals: 0.2, turnovers: 0.4, fouls: 0.8, salary: 800000, quality: 'D-', offense: 25, defense: 28, image: 'images/eren.jpg' },
{ name: 'İzzet Türkyılmaz', position: 'PF', team: 'Yalova Spor', age: 34, points: 3.25, rebounds: 4.31, assists: 3.50, steals: 0.4, turnovers: 0.9, fouls: 1.5, salary: 950000, quality: 'C-', offense: 42, defense: 45, image: 'images/izzet.jpg' },
{ name: 'Kadir Bayram', position: 'PG', team: 'Yalova Spor', age: 28, points: 13.03, rebounds: 3.09, assists: 2.74, steals: 1.1, turnovers: 1.7, fouls: 2.0, salary: 1100000, quality: 'A-', offense: 72, defense: 70, image: 'images/kadir.jpg' },
{ name: 'Mehmet Fırat Alemdaroğlu', position: 'C', team: 'Yalova Spor', age: 28, points: 3.78, rebounds: 2.78, assists: 1.34, steals: 0.4, turnovers: 0.8, fouls: 1.4, salary: 900000, quality: 'C-', offense: 38, defense: 40, image: 'images/mehmetal.jpg' },
{ name: 'Melih Kapucu', position: 'PF', team: 'Yalova Spor', age: 34, points: 4.27, rebounds: 2.53, assists: 2.00, steals: 0.4, turnovers: 0.9, fouls: 1.4, salary: 900000, quality: 'C-', offense: 40, defense: 42, image: 'images/melih.jpg' },
{ name: 'Mert Gizir', position: 'SG', team: 'Yalova Spor', age: 29, points: 4.70, rebounds: 1.53, assists: 1.33, steals: 0.5, turnovers: 0.8, fouls: 1.2, salary: 850000, quality: 'C-', offense: 42, defense: 40, image: 'images/mert.jpg' },
{ name: 'Orhan Aydın Haciyeva', position: 'PF', team: 'Yalova Spor', age: 34, points: 8.06, rebounds: 7.21, assists: 5.35, steals: 0.8, turnovers: 1.5, fouls: 2.0, salary: 1000000, quality: 'B-', offense: 58, defense: 60, image: 'images/orhan.jpg' },
{ name: 'Ömer Sancaklı', position: 'SG', team: 'Yalova Spor', age: 32, points: 6.73, rebounds: 1.88, assists: 1.61, steals: 0.6, turnovers: 1.0, fouls: 1.4, salary: 900000, quality: 'C-', offense: 45, defense: 42, image: 'images/omer.jpg' },
{ name: 'Ricky Lafredrick Tarrant Jr', position: 'PG', team: 'Yalova Spor', age: 31, points: 14.48, rebounds: 3.38, assists: 2.76, steals: 1.3, turnovers: 1.9, fouls: 2.1, salary: 1100000, quality: 'A-', offense: 78, defense: 75, image: 'images/ricky.jpg' },
{ name: 'Sercan Topcu', position: 'SF', team: 'Yalova Spor', age: 39, points: 3.42, rebounds: 0.89, assists: 0.74, steals: 0.3, turnovers: 0.6, fouls: 1.0, salary: 850000, quality: 'D+', offense: 32, defense: 35, image: 'images/sercan.jpg' },

// Harem Spor
{ name: 'Ali Işık', position: 'PF', team: 'Harem Spor', age: 34, points: 9.58, rebounds: 5.21, assists: 3.88, steals: 0.9, turnovers: 1.5, fouls: 2.0, salary: 1000000, quality: 'B-', offense: 62, defense: 60, image: 'images/ali.jpg' },
{ name: 'Bertan Baştan', position: 'SG', team: 'Harem Spor', age: 26, points: 3.70, rebounds: 2.09, assists: 1.43, steals: 0.4, turnovers: 0.8, fouls: 1.2, salary: 850000, quality: 'D+', offense: 35, defense: 38, image: 'images/bertan.jpg' },
{ name: 'Birkan Batuk', position: 'SG', team: 'Harem Spor', age: 34, points: 6.60, rebounds: 3.00, assists: 2.10, steals: 0.6, turnovers: 1.1, fouls: 1.5, salary: 950000, quality: 'C-', offense: 48, defense: 45, image: 'images/birkan.jpg' },
{ name: 'Brandon Karl Huffman', position: 'C', team: 'Harem Spor', age: 26, points: 12.70, rebounds: 9.70, assists: 7.00, steals: 1.2, turnovers: 2.0, fouls: 2.3, salary: 1200000, quality: 'A', offense: 75, defense: 78, image: 'images/brandon_hu.jpg' },
{ name: 'Buğra Ertaş', position: 'PG', team: 'Harem Spor', age: 20, points: 0.86, rebounds: 0.00, assists: 0.00, steals: 0.1, turnovers: 0.3, fouls: 0.4, salary: 800000, quality: 'D-', offense: 20, defense: 22, image: 'images/bugra.jpg' },
{ name: 'Ege Eskinazi', position: 'SG', team: 'Harem Spor', age: 21, points: 6.10, rebounds: 1.94, assists: 1.35, steals: 0.5, turnovers: 0.9, fouls: 1.3, salary: 850000, quality: 'C-', offense: 45, defense: 42, image: 'images/ege_es.jpg' },
{ name: 'Emre Can Akdümbek', position: 'SF', team: 'Harem Spor', age: 21, points: 1.60, rebounds: 1.70, assists: 1.20, steals: 0.2, turnovers: 0.5, fouls: 0.9, salary: 800000, quality: 'D-', offense: 25, defense: 28, image: 'images/emre.jpg' },
{ name: 'Gökhan Karabıyık', position: 'C', team: 'Harem Spor', age: 36, points: 2.50, rebounds: 1.11, assists: 1.00, steals: 0.3, turnovers: 0.6, fouls: 1.2, salary: 950000, quality: 'D-', offense: 30, defense: 32, image: 'images/gokhan_k.jpg' },
{ name: 'Gökhan Aydın', position: 'SF', team: 'Harem Spor', age: 28, points: 7.69, rebounds: 2.25, assists: 1.50, steals: 0.7, turnovers: 1.2, fouls: 1.6, salary: 900000, quality: 'C-', offense: 52, defense: 50, image: 'images/gokhan_a.jpg' },
{ name: 'İnanç Mert Hotamış', position: 'PF', team: 'Harem Spor', age: 22, points: 7.56, rebounds: 3.75, assists: 2.25, steals: 0.7, turnovers: 1.3, fouls: 1.7, salary: 850000, quality: 'C+', offense: 55, defense: 52, image: 'images/inanc.jpg' },
{ name: 'Koralp Türk', position: 'PF', team: 'Harem Spor', age: 21, points: 3.48, rebounds: 2.59, assists: 1.86, steals: 0.4, turnovers: 0.8, fouls: 1.3, salary: 800000, quality: 'D+', offense: 35, defense: 38, image: 'images/koralp.jpg' },
{ name: 'Osiris Eldridge', position: 'SG', team: 'Harem Spor', age: 36, points: 15.79, rebounds: 6.90, assists: 5.97, steals: 1.4, turnovers: 2.1, fouls: 2.2, salary: 1200000, quality: 'A-', offense: 80, defense: 75, image: 'images/osiris.jpg' },
{ name: 'Ömer Yasir Küçük', position: 'PG', team: 'Harem Spor', age: 23, points: 14.31, rebounds: 4.25, assists: 3.81, steals: 1.3, turnovers: 1.9, fouls: 2.0, salary: 950000, quality: 'A-', offense: 75, defense: 72, image: 'images/omeryasır.jpg' },
{ name: 'Tuğberk Gedikli', position: 'PG', team: 'Harem Spor', age: 33, points: 7.57, rebounds: 2.70, assists: 2.17, steals: 0.7, turnovers: 1.2, fouls: 1.6, salary: 900000, quality: 'C', offense: 52, defense: 50, image: 'images/tugberk.jpg' },

// Orman Spor
{ name: 'Bilgehan Diril', position: 'PG', team: 'Orman Spor', age: 23, points: 9.17, rebounds: 2.08, assists: 1.58, steals: 0.8, turnovers: 1.3, fouls: 1.6, salary: 950000, quality: 'C+', offense: 58, defense: 55, image: 'images/bilgehan.jpg' },
{ name: 'Cevat Alper Özcan', position: 'PG', team: 'Orman Spor', age: 34, points: 6.35, rebounds: 2.18, assists: 1.71, steals: 0.6, turnovers: 1.0, fouls: 1.4, salary: 900000, quality: 'C-', offense: 45, defense: 42, image: 'images/cevat.jpg' },
{ name: 'Eric Buckner', position: 'C', team: 'Orman Spor', age: 34, points: 14.81, rebounds: 9.62, assists: 6.73, steals: 1.3, turnovers: 2.1, fouls: 2.4, salary: 1200000, quality: 'A-', offense: 78, defense: 75, image: 'images/eric.jpg' },
{ name: 'Göktürk Gökalp Ural', position: 'PG', team: 'Orman Spor', age: 29, points: 9.15, rebounds: 4.09, assists: 2.68, steals: 0.8, turnovers: 1.4, fouls: 1.8, salary: 950000, quality: 'C+', offense: 58, defense: 55, image: 'images/gokturk.jpg' },
{ name: 'Görkem Fırat Güneri', position: 'SF', team: 'Orman Spor', age: 22, points: 2.78, rebounds: 1.33, assists: 1.11, steals: 0.3, turnovers: 0.6, fouls: 1.0, salary: 850000, quality: 'D-', offense: 32, defense: 35, image: 'images/gorkem.jpg' },
{ name: 'Mehmet Yakar', position: 'PG', team: 'Orman Spor', age: 21, points: 0.69, rebounds: 0.50, assists: 0.19, steals: 0.1, turnovers: 0.3, fouls: 0.5, salary: 800000, quality: 'D-', offense: 22, defense: 25, image: 'images/mehmet.jpg' },
{ name: 'Mertcan Solkol', position: 'SF', team: 'Orman Spor', age: 28, points: 7.57, rebounds: 2.53, assists: 2.03, steals: 0.7, turnovers: 1.2, fouls: 1.6, salary: 900000, quality: 'C-', offense: 52, defense: 50, image: 'images/mertcan.jpg' },
{ name: 'Oğuzhan Tosun', position: 'PG', team: 'Orman Spor', age: 27, points: 7.45, rebounds: 2.24, assists: 1.69, steals: 0.7, turnovers: 1.2, fouls: 1.5, salary: 850000, quality: 'C-', offense: 50, defense: 48, image: 'images/oguzhan.jpg' },
{ name: 'Osman Gökhan Şirin', position: 'PF', team: 'Orman Spor', age: 33, points: 5.42, rebounds: 3.26, assists: 2.65, steals: 0.5, turnovers: 1.0, fouls: 1.7, salary: 1000000, quality: 'C-', offense: 45, defense: 48, image: 'images/osman.jpg' },
{ name: 'Saadettin Donat', position: 'PF', team: 'Orman Spor', age: 23, points: 3.21, rebounds: 1.57, assists: 0.64, steals: 0.3, turnovers: 0.6, fouls: 1.1, salary: 800000, quality: 'D-', offense: 32, defense: 35, image: 'images/saadettin.jpg' },
{ name: 'Servet Alperen Kurnaz', position: 'SF', team: 'Orman Spor', age: 25, points: 8.41, rebounds: 5.12, assists: 3.71, steals: 0.8, turnovers: 1.4, fouls: 1.9, salary: 950000, quality: 'B-', offense: 60, defense: 58, image: 'images/servet.jpg' },
{ name: 'Yavuz Koça', position: 'C', team: 'Orman Spor', age: 24, points: 2.40, rebounds: 2.50, assists: 1.87, steals: 0.3, turnovers: 0.7, fouls: 1.3, salary: 900000, quality: 'D-', offense: 32, defense: 35, image: 'images/yavuz.jpg' },


// Ankaragücü
{ name: 'Alican Güney', position: 'SG', team: 'Ankaragücü', age: 35, points: 5.66, rebounds: 1.79, assists: 1.31, steals: 0.5, turnovers: 0.9, fouls: 1.3, salary: 950000, quality: 'C-', offense: 45, defense: 42, image: 'images/alican.jpg' },
{ name: 'Baran Yurduşen', position: 'PF', team: 'Ankaragücü', age: 20, points: 3.45, rebounds: 2.05, assists: 1.35, steals: 0.4, turnovers: 0.7, fouls: 1.2, salary: 900000, quality: 'D+', offense: 35, defense: 38, image: 'images/baran.jpg' },
{ name: 'Burak Selen', position: 'PF', team: 'Ankaragücü', age: 35, points: 6.18, rebounds: 2.86, assists: 2.09, steals: 0.6, turnovers: 1.1, fouls: 1.7, salary: 1000000, quality: 'B-', offense: 52, defense: 50, image: 'images/burak.jpg' },
{ name: 'Can Urşan', position: 'PG', team: 'Ankaragücü', age: 24, points: 5.55, rebounds: 1.55, assists: 1.29, steals: 0.5, turnovers: 0.9, fouls: 1.2, salary: 850000, quality: 'C-', offense: 42, defense: 40, image: 'images/can.jpg' },
{ name: 'Caner Ercan', position: 'C', team: 'Ankaragücü', age: 37, points: 4.74, rebounds: 1.95, assists: 1.47, steals: 0.4, turnovers: 0.8, fouls: 1.5, salary: 1050000, quality: 'C-', offense: 40, defense: 42, image: 'images/caner.jpg' },
{ name: 'Efe Beşok', position: 'PF', team: 'Ankaragücü', age: 27, points: 1.44, rebounds: 0.56, assists: 0.33, steals: 0.2, turnovers: 0.4, fouls: 0.8, salary: 800000, quality: 'D-', offense: 25, defense: 28, image: 'images/efe.jpg' },
{ name: 'Hakan Yapar', position: 'PF', team: 'Ankaragücü', age: 39, points: 18.42, rebounds: 6.21, assists: 4.89, steals: 1.5, turnovers: 2.2, fouls: 2.4, salary: 1200000, quality: 'A', offense: 82, defense: 78, image: 'images/hakan.jpg' },
{ name: 'İlhan Barış Gökalp', position: 'SF', team: 'Ankaragücü', age: 33, points: 3.05, rebounds: 1.53, assists: 1.16, steals: 0.3, turnovers: 0.6, fouls: 1.1, salary: 850000, quality: 'D+', offense: 32, defense: 35, image: 'images/ilhan.jpg' },
{ name: 'İsmet Baran Avşar', position: 'PG', team: 'Ankaragücü', age: 24, points: 4.47, rebounds: 1.71, assists: 1.41, steals: 0.4, turnovers: 0.8, fouls: 1.2, salary: 900000, quality: 'D+', offense: 38, defense: 40, image: 'images/ismet.jpg' },
{ name: 'Kyan Shakeel Anderson', position: 'SG', team: 'Ankaragücü', age: 32, points: 21.41, rebounds: 2.50, assists: 2.24, steals: 1.8, turnovers: 2.4, fouls: 2.1, salary: 1500000, quality: 'S-', offense: 85, defense: 80, image: 'images/kyan.jpg' },
{ name: 'Mevlüt Melih Doğan', position: 'SF', team: 'Ankaragücü', age: 20, points: 2.20, rebounds: 2.20, assists: 1.30, steals: 0.3, turnovers: 0.5, fouls: 0.9, salary: 850000, quality: 'D-', offense: 30, defense: 32, image: 'images/mevlut.jpg' },
{ name: 'Mithat Can Özalp', position: 'PG', team: 'Ankaragücü', age: 22, points: 4.46, rebounds: 1.42, assists: 0.83, steals: 0.4, turnovers: 0.7, fouls: 1.1, salary: 900000, quality: 'D+', offense: 35, defense: 38, image: 'images/mithat.jpg' },
{ name: 'Oderah Anosike', position: 'C', team: 'Ankaragücü', age: 33, points: 11.87, rebounds: 13.80, assists: 1.20, steals: 1.2, turnovers: 2.0, fouls: 2.5, salary: 1300000, quality: 'A-', offense: 75, defense: 78, image: 'images/oderah.jpg' },
{ name: 'Oğulcan Baykan', position: 'SG', team: 'Ankaragücü', age: 27, points: 6.21, rebounds: 3.36, assists: 2.86, steals: 0.6, turnovers: 1.1, fouls: 1.6, salary: 950000, quality: 'C-', offense: 48, defense: 45, image: 'images/ogulcan.jpg' },
{ name: 'Soner Şentürk', position: 'PG', team: 'Ankaragücü', age: 37, points: 6.22, rebounds: 3.61, assists: 2.56, steals: 0.6, turnovers: 1.2, fouls: 1.7, salary: 1050000, quality: 'C-', offense: 45, defense: 42, image: 'images/soner.jpg' },

// Mersin Büyükşehir
{ name: 'Ata Turgut', position: 'PG', team: 'Mersin Büyükşehir', age: 24, points: 1.38, rebounds: 1.54, assists: 1.15, steals: 0.2, turnovers: 0.4, fouls: 0.8, salary: 900000, quality: 'D-', offense: 28, defense: 30, image: 'images/ata.jpg' },
{ name: 'Berat Berke Tunç', position: 'PF', team: 'Mersin Büyükşehir', age: 19, points: 0.64, rebounds: 0.82, assists: 0.36, steals: 0.1, turnovers: 0.3, fouls: 0.5, salary: 850000, quality: 'D-', offense: 22, defense: 25, image: 'images/berat.jpg' },
{ name: 'Berkay Sinirlioğlu', position: 'PG', team: 'Mersin Büyükşehir', age: 29, points: 9.93, rebounds: 3.36, assists: 2.75, steals: 1.0, turnovers: 1.6, fouls: 1.9, salary: 1200000, quality: 'B-', offense: 62, defense: 60, image: 'images/berkay_si.jpg' },
{ name: 'Burak Gözeneli', position: 'PG', team: 'Mersin Büyükşehir', age: 23, points: 6.11, rebounds: 1.05, assists: 0.92, steals: 0.6, turnovers: 1.0, fouls: 1.3, salary: 950000, quality: 'C-', offense: 45, defense: 42, image: 'images/burak_go.jpg' },
{ name: 'Canberk Kuş', position: 'SF', team: 'Mersin Büyükşehir', age: 27, points: 9.45, rebounds: 4.62, assists: 3.31, steals: 0.9, turnovers: 1.5, fouls: 2.0, salary: 1250000, quality: 'B', offense: 65, defense: 62, image: 'images/canberk.jpg' },
{ name: 'Deniz Çelen', position: 'PF', team: 'Mersin Büyükşehir', age: 26, points: 5.37, rebounds: 3.15, assists: 2.29, steals: 0.6, turnovers: 1.1, fouls: 1.6, salary: 1000000, quality: 'C', offense: 48, defense: 45, image: 'images/deniz.jpg' },
{ name: 'Evaldas Kairys', position: 'PF', team: 'Mersin Büyükşehir', age: 33, points: 9.41, rebounds: 5.36, assists: 3.68, steals: 0.9, turnovers: 1.6, fouls: 2.2, salary: 1350000, quality: 'B-', offense: 62, defense: 65, image: 'images/evaldas.jpg' },
{ name: 'Gerel David Simmons', position: 'PG', team: 'Mersin Büyükşehir', age: 30, points: 19.03, rebounds: 3.41, assists: 2.32, steals: 1.6, turnovers: 2.2, fouls: 2.0, salary: 1500000, quality: 'S-', offense: 82, defense: 75, image: 'images/gerel.jpg' },
{ name: 'Gökhan Yazıcıoğlu', position: 'PF', team: 'Mersin Büyükşehir', age: 33, points: 8.51, rebounds: 6.28, assists: 4.56, steals: 0.8, turnovers: 1.5, fouls: 2.1, salary: 1200000, quality: 'B-', offense: 60, defense: 62, image: 'images/gokhan.jpg' },
{ name: 'Hüseyin Akın Kandemir', position: 'SG', team: 'Mersin Büyükşehir', age: 28, points: 9.66, rebounds: 2.20, assists: 1.97, steals: 0.9, turnovers: 1.4, fouls: 1.8, salary: 1100000, quality: 'B-', offense: 62, defense: 58, image: 'images/huseyin.jpg' },
{ name: 'Murat Meriç Kuntker', position: 'SG', team: 'Mersin Büyükşehir', age: 21, points: 5.91, rebounds: 1.55, assists: 1.09, steals: 0.5, turnovers: 0.9, fouls: 1.2, salary: 900000, quality: 'C-', offense: 42, defense: 40, image: 'images/murat.jpg' },
{ name: 'Oleksandr Mishula', position: 'PG', team: 'Mersin Büyükşehir', age: 31, points: 6.00, rebounds: 0.50, assists: 0.50, steals: 0.5, turnovers: 0.8, fouls: 1.1, salary: 900000, quality: 'C-', offense: 45, defense: 42, image: 'images/oleksandr.jpg' },
{ name: 'Ramazan Tekin', position: 'C', team: 'Mersin Büyükşehir', age: 30, points: 3.29, rebounds: 2.88, assists: 1.95, steals: 0.4, turnovers: 0.8, fouls: 1.5, salary: 1000000, quality: 'C-', offense: 38, defense: 42, image: 'images/ramazan.jpg' },
{ name: 'Turgut Doğukan Seyhan', position: 'SG', team: 'Mersin Büyükşehir', age: 17, points: 0.00, rebounds: 0.00, assists: 0.00, steals: 0.0, turnovers: 0.0, fouls: 0.0, salary: 850000, quality: 'D-', offense: 20, defense: 22, image: 'images/turgut.jpg' },
{ name: 'Yiğitcan Turna', position: 'PG', team: 'Mersin Büyükşehir', age: 36, points: 3.48, rebounds: 1.66, assists: 1.28, steals: 0.4, turnovers: 0.7, fouls: 1.2, salary: 950000, quality: 'D+', offense: 38, defense: 35, image: 'images/yigitcan.jpg' },

    // KonyaSpor
    { name: 'Adem Bayrak', position: 'SF', team: 'KonyaSpor', age: 23, points: 3.68, rebounds: 1.61, assists: 0.96, steals: 0.4, turnovers: 0.8, fouls: 1.2, salary: 1000000, quality: 'D+', offense: 38, defense: 40, image: 'images/adem.jpg' },
    { name: 'Arda Erdoğan', position: 'PG', team: 'KonyaSpor', age: 24, points: 1.96, rebounds: 1.09, assists: 0.91, steals: 0.3, turnovers: 0.5, fouls: 0.9, salary: 900000, quality: 'D-', offense: 32, defense: 35, image: 'images/arda.jpg' },
    { name: 'Batuhan Acar', position: 'SG', team: 'KonyaSpor', age: 21, points: 5.16, rebounds: 2.35, assists: 1.35, steals: 0.6, turnovers: 1.0, fouls: 1.4, salary: 1100000, quality: 'C+', offense: 48, defense: 45, image: 'images/batuhan.jpg' },
    { name: 'Doruk Dora', position: 'SG', team: 'KonyaSpor', age: 24, points: 4.00, rebounds: 0.67, assists: 0.53, steals: 0.4, turnovers: 0.7, fouls: 1.1, salary: 1000000, quality: 'D+', offense: 35, defense: 38, image: 'images/doruk.jpg' },
    { name: 'Mert Çevik', position: 'SG', team: 'KonyaSpor', age: 27, points: 8.28, rebounds: 4.41, assists: 4.03, steals: 0.9, turnovers: 1.5, fouls: 1.9, salary: 1200000, quality: 'B-', offense: 62, defense: 60, image: 'images/mert_ç.jpg' },
    { name: 'Mert Ali Sert', position: 'PF', team: 'KonyaSpor', age: 27, points: 8.53, rebounds: 4.40, assists: 3.20, steals: 0.8, turnovers: 1.4, fouls: 2.0, salary: 1200000, quality: 'B-', offense: 60, defense: 58, image: 'images/mertali.jpg' },
    { name: 'Merthan Mutlu', position: 'PG', team: 'KonyaSpor', age: 29, points: 14.00, rebounds: 3.73, assists: 3.24, steals: 1.3, turnovers: 1.9, fouls: 2.1, salary: 1300000, quality: 'A-', offense: 75, defense: 70, image: 'images/merthan.jpg' },
    { name: 'Muhammed Emin Kütük', position: 'SG', team: 'KonyaSpor', age: 19, points: 0.00, rebounds: 0.00, assists: 0.00, steals: 0.0, turnovers: 0.0, fouls: 0.0, salary: 900000, quality: 'D-', offense: 20, defense: 22, image: 'images/muhammed.jpg' },
    { name: 'Murat Atar', position: 'PF', team: 'KonyaSpor', age: 26, points: 3.06, rebounds: 2.26, assists: 1.23, steals: 0.4, turnovers: 0.8, fouls: 1.3, salary: 1000000, quality: 'D+', offense: 35, defense: 38, image: 'images/murat_at.jpg' },
    { name: 'Myles Anthony Mack', position: 'PG', team: 'KonyaSpor', age: 31, points: 21.50, rebounds: 3.88, assists: 3.00, steals: 1.8, turnovers: 2.4, fouls: 2.2, salary: 1600000, quality: 'S+', offense: 88, defense: 82, image: 'images/myles.jpg' },
    { name: 'Ömer Yavaş', position: 'PF', team: 'KonyaSpor', age: 22, points: 2.86, rebounds: 1.43, assists: 1.07, steals: 0.3, turnovers: 0.6, fouls: 1.1, salary: 900000, quality: 'D+', offense: 32, defense: 35, image: 'images/omer_yv.jpg' },
    { name: 'Said Emre Yosmaoğlu', position: 'SG', team: 'KonyaSpor', age: 20, points: 1.75, rebounds: 1.00, assists: 0.83, steals: 0.2, turnovers: 0.4, fouls: 0.8, salary: 900000, quality: 'D-', offense: 28, defense: 30, image: 'images/said.jpg' },
    { name: 'Uğur Can Aksoy', position: 'PF', team: 'KonyaSpor', age: 32, points: 3.29, rebounds: 2.41, assists: 1.44, steals: 0.4, turnovers: 0.8, fouls: 1.4, salary: 1000000, quality: 'D+', offense: 38, defense: 40, image: 'images/ugur.jpg' },

// Kocaeli Kağıt
{ name: 'Barboros Bozkurt', position: 'C', team: 'Kocaeli Kağıt', age: 35, points: 4.07, rebounds: 3.11, assists: 2.50, steals: 0.5, turnovers: 1.0, fouls: 1.8, salary: 1200000, quality: 'D+', offense: 42, defense: 45, image: 'images/barboros.jpg' },
{ name: 'Beray Taşer', position: 'SG', team: 'Kocaeli Kağıt', age: 20, points: 0.43, rebounds: 0.14, assists: 0.14, steals: 0.1, turnovers: 0.2, fouls: 0.4, salary: 900000, quality: 'D-', offense: 22, defense: 25, image: 'images/beray.jpg' },
{ name: 'Berke Baran Akçam', position: 'PG', team: 'Kocaeli Kağıt', age: 23, points: 1.35, rebounds: 0.70, assists: 0.43, steals: 0.2, turnovers: 0.4, fouls: 0.7, salary: 900000, quality: 'D-', offense: 28, defense: 30, image: 'images/berke.jpg' },
{ name: 'Elber Mirza Sucu', position: 'PF', team: 'Kocaeli Kağıt', age: 19, points: 0.50, rebounds: 1.00, assists: 1.00, steals: 0.1, turnovers: 0.3, fouls: 0.6, salary: 900000, quality: 'D-', offense: 25, defense: 28, image: 'images/elber.jpg' },
{ name: 'Eren Beyaz', position: 'PF', team: 'Kocaeli Kağıt', age: 38, points: 7.83, rebounds: 3.62, assists: 2.86, steals: 0.8, turnovers: 1.3, fouls: 2.0, salary: 1300000, quality: 'B-', offense: 58, defense: 55, image: 'images/eren_b.jpg' },
{ name: 'Hakan Şanlı', position: 'SG', team: 'Kocaeli Kağıt', age: 26, points: 3.81, rebounds: 2.06, assists: 1.28, steals: 0.5, turnovers: 0.8, fouls: 1.3, salary: 1100000, quality: 'C-', offense: 42, defense: 40, image: 'images/hakan_ş.jpg' },
{ name: 'İbrahim Yıldırım', position: 'PG', team: 'Kocaeli Kağıt', age: 33, points: 10.50, rebounds: 4.33, assists: 3.67, steals: 1.1, turnovers: 1.7, fouls: 2.1, salary: 1400000, quality: 'B', offense: 65, defense: 62, image: 'images/ibrahim.jpg' },
{ name: 'Ja Cori Artimus Coselle Payne', position: 'PG', team: 'Kocaeli Kağıt', age: 27, points: 20.62, rebounds: 2.68, assists: 2.24, steals: 1.7, turnovers: 2.3, fouls: 2.1, salary: 1600000, quality: 'S-', offense: 85, defense: 78, image: 'images/jacori.jpg' },
{ name: 'Keith Martin Stone', position: 'PF', team: 'Kocaeli Kağıt', age: 26, points: 16.32, rebounds: 8.71, assists: 6.29, steals: 1.4, turnovers: 2.1, fouls: 2.5, salary: 1500000, quality: 'A-', offense: 78, defense: 75, image: 'images/keith.jpg' },
{ name: 'Kevin Kaspar', position: 'PG', team: 'Kocaeli Kağıt', age: 31, points: 8.16, rebounds: 4.56, assists: 3.78, steals: 0.9, turnovers: 1.5, fouls: 1.9, salary: 1300000, quality: 'B-', offense: 60, defense: 58, image: 'images/kevin.jpg' },
{ name: 'Melih Can Kızılkaya', position: 'SG', team: 'Kocaeli Kağıt', age: 19, points: 0.00, rebounds: 0.00, assists: 0.00, steals: 0.0, turnovers: 0.0, fouls: 0.0, salary: 900000, quality: 'D-', offense: 20, defense: 22, image: 'images/melih.jpg' },
{ name: 'Mert Ulutaş', position: 'SF', team: 'Kocaeli Kağıt', age: 26, points: 10.97, rebounds: 3.10, assists: 2.19, steals: 1.0, turnovers: 1.6, fouls: 1.8, salary: 1400000, quality: 'B', offense: 65, defense: 62, image: 'images/mert_u.jpg' },
{ name: 'Mete Tekçevik', position: 'SF', team: 'Kocaeli Kağıt', age: 22, points: 2.05, rebounds: 0.82, assists: 0.68, steals: 0.3, turnovers: 0.6, fouls: 1.0, salary: 1000000, quality: 'D-', offense: 32, defense: 35, image: 'images/mete.jpg' },
{ name: 'Sertan İbrahim Sarı', position: 'PF', team: 'Kocaeli Kağıt', age: 28, points: 5.38, rebounds: 2.79, assists: 1.91, steals: 0.6, turnovers: 1.1, fouls: 1.6, salary: 1200000, quality: 'C-', offense: 45, defense: 48, image: 'images/sertan.jpg' },
{ name: 'Tolga Kayra Arıt', position: 'PG', team: 'Kocaeli Kağıt', age: 19, points: 2.00, rebounds: 0.00, assists: 0.00, steals: 0.2, turnovers: 0.4, fouls: 0.6, salary: 900000, quality: 'D-', offense: 25, defense: 28, image: 'images/tolga.jpg' },


// Kapaklı Spor
{ name: 'Alperen Demir', position: 'PF', team: 'Kapaklı Spor', age: 23, points: 4.80, rebounds: 2.00, assists: 1.13, steals: 0.5, turnovers: 0.9, fouls: 1.4, salary: 1200000, quality: 'D+', offense: 42, defense: 45, image: 'images/alperen.jpg' },
{ name: 'Baha Korkmaz', position: 'SG', team: 'Kapaklı Spor', age: 19, points: 1.20, rebounds: 2.00, assists: 1.20, steals: 0.2, turnovers: 0.5, fouls: 0.8, salary: 900000, quality: 'D-', offense: 28, defense: 32, image: 'images/baha.jpg' },
{ name: 'Cem Han', position: 'PF', team: 'Kapaklı Spor', age: 28, points: 10.64, rebounds: 5.73, assists: 4.21, steals: 1.1, turnovers: 1.7, fouls: 2.2, salary: 1400000, quality: 'B+', offense: 68, defense: 65, image: 'images/cem.jpg' },
{ name: 'Emir Bozyiğit', position: 'PG', team: 'Kapaklı Spor', age: 22, points: 1.00, rebounds: 0.47, assists: 0.47, steals: 0.2, turnovers: 0.4, fouls: 0.7, salary: 900000, quality: 'D-', offense: 25, defense: 28, image: 'images/emir.jpg' },
{ name: 'Harun Can Doğan', position: 'SG', team: 'Kapaklı Spor', age: 27, points: 9.00, rebounds: 2.52, assists: 2.12, steals: 0.9, turnovers: 1.4, fouls: 1.8, salary: 1300000, quality: 'B-', offense: 62, defense: 58, image: 'images/harun.jpg' },
{ name: 'İbrahim Ahmet Pınarer', position: 'SF', team: 'Kapaklı Spor', age: 25, points: 5.32, rebounds: 2.38, assists: 1.32, steals: 0.6, turnovers: 1.0, fouls: 1.5, salary: 1200000, quality: 'C', offense: 48, defense: 45, image: 'images/ibrahim_a.jpg' },
{ name: 'Kaan Yıldırımkanlı', position: 'SG', team: 'Kapaklı Spor', age: 22, points: 2.65, rebounds: 1.12, assists: 0.94, steals: 0.4, turnovers: 0.7, fouls: 1.2, salary: 1000000, quality: 'D+', offense: 35, defense: 38, image: 'images/kaan.jpg' },
{ name: 'Kemal Can Aktuna', position: 'SG', team: 'Kapaklı Spor', age: 28, points: 15.67, rebounds: 3.50, assists: 3.00, steals: 1.4, turnovers: 2.1, fouls: 2.2, salary: 1500000, quality: 'A-', offense: 78, defense: 72, image: 'images/kemal.jpg' },
{ name: 'Kristijan Nikolov', position: 'PG', team: 'Kapaklı Spor', age: 26, points: 12.47, rebounds: 2.40, assists: 1.87, steals: 1.2, turnovers: 1.8, fouls: 2.0, salary: 1400000, quality: 'A-', offense: 72, defense: 68, image: 'images/kristijan.jpg' },
{ name: 'Marvin Hilton Jefferson', position: 'C', team: 'Kapaklı Spor', age: 37, points: 11.35, rebounds: 9.81, assists: 6.32, steals: 1.2, turnovers: 2.0, fouls: 2.5, salary: 1600000, quality: 'A', offense: 75, defense: 78, image: 'images/marvin.jpg' },
{ name: 'Serkan Özver', position: 'PF', team: 'Kapaklı Spor', age: 33, points: 7.29, rebounds: 5.38, assists: 3.09, steals: 0.8, turnovers: 1.4, fouls: 2.1, salary: 1300000, quality: 'B-', offense: 58, defense: 60, image: 'images/serkan_ü.jpg' },
{ name: 'Troy Chissell Franklin Jr', position: 'PG', team: 'Kapaklı Spor', age: 34, points: 21.90, rebounds: 3.55, assists: 2.87, steals: 1.8, turnovers: 2.4, fouls: 2.2, salary: 1700000, quality: 'S+', offense: 88, defense: 82, image: 'images/troy.jpg' },
{ name: 'Utku Pelit', position: 'SG', team: 'Kapaklı Spor', age: 19, points: 4.28, rebounds: 1.44, assists: 1.16, steals: 0.5, turnovers: 0.8, fouls: 1.2, salary: 900000, quality: 'C-', offense: 42, defense: 40, image: 'images/utku.jpg' },

// Gölbaşı Ted
{ name: 'Atakan Akçam', position: 'PG', team: 'Gölbaşı Ted', age: 27, points: 2.12, rebounds: 1.24, assists: 0.79, steals: 0.3, turnovers: 0.6, fouls: 1.1, salary: 1200000, quality: 'D+', offense: 35, defense: 38, image: 'images/atakan.jpg' },
{ name: 'Bartu Aslan Çilengeroğlu', position: 'SG', team: 'Gölbaşı Ted', age: 18, points: 0.80, rebounds: 0.60, assists: 0.20, steals: 0.1, turnovers: 0.3, fouls: 0.5, salary: 900000, quality: 'D-', offense: 25, defense: 28, image: 'images/bartu.jpg' },
{ name: 'Cengizhan İvedi', position: 'SF', team: 'Gölbaşı Ted', age: 24, points: 6.71, rebounds: 3.82, assists: 2.68, steals: 0.8, turnovers: 1.3, fouls: 1.8, salary: 1300000, quality: 'C+', offense: 55, defense: 52, image: 'images/cengizhan.jpg' },
{ name: 'Cevher Özer', position: 'PF', team: 'Gölbaşı Ted', age: 40, points: 3.33, rebounds: 3.20, assists: 2.67, steals: 0.5, turnovers: 1.0, fouls: 1.7, salary: 1400000, quality: 'D+', offense: 42, defense: 45, image: 'images/cevher.jpg' },
{ name: 'Doğukan Sönmez', position: 'PF', team: 'Gölbaşı Ted', age: 31, points: 5.22, rebounds: 3.19, assists: 1.85, steals: 0.6, turnovers: 1.1, fouls: 1.8, salary: 1300000, quality: 'C', offense: 48, defense: 50, image: 'images/dogukan_s.jpg' },
{ name: 'Ege Berk Cangal', position: 'SG', team: 'Gölbaşı Ted', age: 20, points: 0.63, rebounds: 0.13, assists: 0.00, steals: 0.1, turnovers: 0.2, fouls: 0.4, salary: 900000, quality: 'D-', offense: 22, defense: 25, image: 'images/ege.jpg' },
{ name: 'Ekrem Sancaklı', position: 'SG', team: 'Gölbaşı Ted', age: 22, points: 7.53, rebounds: 2.00, assists: 1.67, steals: 0.8, turnovers: 1.3, fouls: 1.6, salary: 1400000, quality: 'C+', offense: 58, defense: 55, image: 'images/ekrem.jpg' },
{ name: 'Furkan Ayça', position: 'PG', team: 'Gölbaşı Ted', age: 24, points: 6.11, rebounds: 1.86, assists: 1.28, steals: 0.7, turnovers: 1.2, fouls: 1.5, salary: 1300000, quality: 'C+', offense: 52, defense: 50, image: 'images/furkan.jpg' },
{ name: 'Hazer Avci', position: 'PF', team: 'Gölbaşı Ted', age: 36, points: 13.42, rebounds: 4.84, assists: 4.26, steals: 1.2, turnovers: 1.9, fouls: 2.3, salary: 1400000, quality: 'A', offense: 75, defense: 72, image: 'images/hazer.jpg' },
{ name: 'Julien Dimitri Ducree', position: 'PF', team: 'Gölbaşı Ted', age: 26, points: 15.11, rebounds: 7.81, assists: 4.96, steals: 1.3, turnovers: 2.0, fouls: 2.4, salary: 1500000, quality: 'A', offense: 78, defense: 75, image: 'images/julien.jpg' },
{ name: 'Karan Şahin', position: 'SG', team: 'Gölbaşı Ted', age: 16, points: 0.00, rebounds: 0.00, assists: 0.00, steals: 0.0, turnovers: 0.0, fouls: 0.0, salary: 900000, quality: 'D-', offense: 20, defense: 22, image: 'images/karan.jpg' },
{ name: 'Michael Soloman Smith', position: 'SF', team: 'Gölbaşı Ted', age: 26, points: 15.33, rebounds: 2.67, assists: 2.00, steals: 1.4, turnovers: 2.1, fouls: 2.2, salary: 1500000, quality: 'A-', offense: 80, defense: 75, image: 'images/michael.jpg' },
{ name: 'Ömer Can Engin', position: 'SF', team: 'Gölbaşı Ted', age: 25, points: 2.74, rebounds: 1.74, assists: 1.39, steals: 0.4, turnovers: 0.8, fouls: 1.3, salary: 1300000, quality: 'D+', offense: 38, defense: 40, image: 'images/omercan.jpg' },
{ name: 'Sedat Ali Karagülle', position: 'SG', team: 'Gölbaşı Ted', age: 24, points: 8.26, rebounds: 2.96, assists: 2.22, steals: 0.9, turnovers: 1.4, fouls: 1.8, salary: 1400000, quality: 'B-', offense: 60, defense: 58, image: 'images/sedat.jpg' },
{ name: 'Teyvon Taffarie Myers', position: 'PG', team: 'Gölbaşı Ted', age: 28, points: 18.59, rebounds: 4.09, assists: 3.56, steals: 1.6, turnovers: 2.3, fouls: 2.1, salary: 1600000, quality: 'S-', offense: 85, defense: 80, image: 'images/teyvon.jpg' },

// Fenerbahçe Koleji
{ name: 'Barış Yeniay', position: 'SF', team: 'Fenerbahçe Koleji', age: 25, points: 4.18, rebounds: 3.82, assists: 2.94, steals: 0.8, turnovers: 1.2, fouls: 1.8, salary: 1300000, quality: 'C-', offense: 42, defense: 45, image: 'images/baris.jpg' },
{ name: 'Edward Jamal Croswell', position: 'PF', team: 'Fenerbahçe Koleji', age: 25, points: 19.09, rebounds: 9.30, assists: 5.73, steals: 1.4, turnovers: 2.3, fouls: 2.8, salary: 1600000, quality: 'S-', offense: 82, defense: 78, image: 'images/edward.jpg' },
{ name: 'Eren Deniz', position: 'SG', team: 'Fenerbahçe Koleji', age: 20, points: 2.93, rebounds: 2.44, assists: 1.81, steals: 0.5, turnovers: 0.9, fouls: 1.4, salary: 1100000, quality: 'D+', offense: 35, defense: 38, image: 'images/eren.jpg' },
{ name: 'Faruk Biberoviç', position: 'PF', team: 'Fenerbahçe Koleji', age: 19, points: 3.38, rebounds: 2.21, assists: 1.71, steals: 0.4, turnovers: 1.1, fouls: 1.6, salary: 1000000, quality: 'D+', offense: 36, defense: 39, image: 'images/faruk.jpg' },
{ name: 'Gökay Hacıoğlu', position: 'PF', team: 'Fenerbahçe Koleji', age: 22, points: 10.56, rebounds: 5.42, assists: 3.83, steals: 1.1, turnovers: 1.8, fouls: 2.3, salary: 1400000, quality: 'A-', offense: 68, defense: 65, image: 'images/gokay.jpg' },
{ name: 'Gökhan Edge Demirli', position: 'SG', team: 'Fenerbahçe Koleji', age: 25, points: 4.00, rebounds: 2.00, assists: 1.77, steals: 0.6, turnovers: 1.0, fouls: 1.5, salary: 1200000, quality: 'C-', offense: 41, defense: 43, image: 'images/gokhan.jpg' },
{ name: 'Hakan Turan Gökcek', position: 'PG', team: 'Fenerbahçe Koleji', age: 19, points: 0, rebounds: 0, assists: 0, steals: 0.1, turnovers: 0.4, fouls: 0.5, salary: 1000000, quality: 'D-', offense: 25, defense: 28, image: 'images/hakan.jpg' },
{ name: 'Kadir Yiğit Yancı', position: 'SG', team: 'Fenerbahçe Koleji', age: 19, points: 1.50, rebounds: 0.50, assists: 0.50, steals: 0.2, turnovers: 0.6, fouls: 0.8, salary: 900000, quality: 'D-', offense: 28, defense: 30, image: 'images/kadir.jpg' },
{ name: 'Kutay Odabaşı', position: 'PF', team: 'Fenerbahçe Koleji', age: 20, points: 2.87, rebounds: 0.47, assists: 0.27, steals: 0.3, turnovers: 0.8, fouls: 1.2, salary: 1100000, quality: 'D+', offense: 34, defense: 36, image: 'images/kutay.jpg' },
{ name: 'Mert Emre Ekşioğlu', position: 'SG', team: 'Fenerbahçe Koleji', age: 22, points: 8.20, rebounds: 2.37, assists: 1.53, steals: 0.8, turnovers: 1.4, fouls: 1.9, salary: 1300000, quality: 'B-', offense: 56, defense: 52, image: 'images/mert.jpg' },
{ name: 'Michale Jerome Davis Jr', position: 'PG', team: 'Fenerbahçe Koleji', age: 28, points: 25.32, rebounds: 5.19, assists: 4.39, steals: 1.6, turnovers: 2.8, fouls: 2.4, salary: 1800000, quality: 'S+', offense: 88, defense: 82, image: 'images/michale.jpg' },
{ name: 'Oğuzhan Göktepe', position: 'SG', team: 'Fenerbahçe Koleji', age: 20, points: 3.57, rebounds: 0.57, assists: 0.46, steals: 0.4, turnovers: 0.9, fouls: 1.3, salary: 1000000, quality: 'D+', offense: 38, defense: 35, image: 'images/oguzhan.jpg' },
{ name: 'Okay Camgöz', position: 'SF', team: 'Fenerbahçe Koleji', age: 23, points: 5.11, rebounds: 1.67, assists: 1.44, steals: 0.7, turnovers: 1.2, fouls: 1.7, salary: 1100000, quality: 'C', offense: 45, defense: 48, image: 'images/okay.jpg' },
{ name: 'Utku Saraloğlu', position: 'PG', team: 'Fenerbahçe Koleji', age: 27, points: 6.60, rebounds: 2.87, assists: 2.27, steals: 0.9, turnovers: 1.5, fouls: 2.0, salary: 1200000, quality: 'C+', offense: 52, defense: 50, image: 'images/utku.jpg' },
{ name: 'Yiğit Özkan', position: 'SG', team: 'Fenerbahçe Koleji', age: 23, points: 6.06, rebounds: 2.50, assists: 1.78, steals: 0.8, turnovers: 1.3, fouls: 1.8, salary: 1100000, quality: 'C+', offense: 50, defense: 48, image: 'images/yigit.jpg' },
{ name: 'Yiğit Hamza Mestoğlu', position: 'PF', team: 'Fenerbahçe Koleji', age: 20, points: 10.62, rebounds: 4.54, assists: 3.08, steals: 1.0, turnovers: 1.7, fouls: 2.2, salary: 1300000, quality: 'A-', offense: 65, defense: 62, image: 'images/yigit_hamza.jpg' },
{ name: 'Yusuf Bayrak', position: 'SF', team: 'Fenerbahçe Koleji', age: 21, points: 2.28, rebounds: 1.76, assists: 1.36, steals: 0.4, turnovers: 0.8, fouls: 1.2, salary: 1000000, quality: 'D+', offense: 32, defense: 35, image: 'images/yusuf.jpg' },

// ESENLER EROK
{ name: 'Altan Erol', position: 'SF', team: 'Esenler Erok', age: 39, points: 9.76, rebounds: 3.62, assists: 2.15, steals: 0.9, turnovers: 1.6, fouls: 2.1, salary: 1400000, quality: 'B-', offense: 58, defense: 54, image: 'images/altan.jpg' },
{ name: 'Anthony Keith Morse', position: 'PF', team: 'Esenler Erok', age: 28, points: 20.06, rebounds: 7.67, assists: 4.72, steals: 1.5, turnovers: 2.5, fouls: 2.8, salary: 1500000, quality: 'S', offense: 85, defense: 78, image: 'images/anthony.jpg' },
{ name: 'Deniz Can Çevik', position: 'SG', team: 'Esenler Erok', age: 28, points: 4.81, rebounds: 1.63, assists: 1.31, steals: 0.5, turnovers: 1.0, fouls: 1.6, salary: 1200000, quality: 'D+', offense: 45, defense: 42, image: 'images/deniz.jpg' },
{ name: 'Görkem Doğan', position: 'C', team: 'Esenler Erok', age: 24, points: 1.94, rebounds: 1.00, assists: 0.69, steals: 0.3, turnovers: 0.6, fouls: 1.2, salary: 1100000, quality: 'D-', offense: 38, defense: 40, image: 'images/gorkem.jpg' },
{ name: 'Kahlil Quinton Dukes', position: 'PG', team: 'Esenler Erok', age: 27, points: 20.08, rebounds: 3.50, assists: 3.33, steals: 1.6, turnovers: 2.6, fouls: 2.3, salary: 1300000, quality: 'S-', offense: 84, defense: 72, image: 'images/kahlil.jpg' },
{ name: 'Murat Göktaş', position: 'PF', team: 'Esenler Erok', age: 35, points: 5.53, rebounds: 2.35, assists: 1.94, steals: 0.6, turnovers: 1.2, fouls: 1.8, salary: 1400000, quality: 'C-', offense: 48, defense: 45, image: 'images/murat.jpg' },
{ name: 'Mustafa Erdoğan', position: 'PF', team: 'Esenler Erok', age: 29, points: 5.86, rebounds: 3.91, assists: 3.23, steals: 0.7, turnovers: 1.3, fouls: 2.0, salary: 1300000, quality: 'C', offense: 52, defense: 54, image: 'images/mustafa.jpg' },
{ name: 'Tarık Çolak', position: 'PG', team: 'Esenler Erok', age: 25, points: 0.64, rebounds: 0.18, assists: 0.09, steals: 0.1, turnovers: 0.3, fouls: 0.8, salary: 900000, quality: 'D-', offense: 35, defense: 38, image: 'images/tarik.jpg' },
{ name: 'Tayfun Erülkü', position: 'PG', team: 'Esenler Erok', age: 28, points: 13.41, rebounds: 5.88, assists: 4.35, steals: 1.2, turnovers: 2.0, fouls: 2.4, salary: 1500000, quality: 'A-', offense: 72, defense: 68, image: 'images/tayfun.jpg' },
{ name: 'Tuna Han Dikmen', position: 'PF', team: 'Esenler Erok', age: 28, points: 4.52, rebounds: 3.97, assists: 2.73, steals: 0.5, turnovers: 1.1, fouls: 1.9, salary: 1300000, quality: 'C-', offense: 46, defense: 50, image: 'images/tuna.jpg' },
{ name: 'Umut Geçen', position: 'SG', team: 'Esenler Erok', age: 25, points: 5.76, rebounds: 1.68, assists: 1.26, steals: 0.6, turnovers: 1.2, fouls: 1.7, salary: 1100000, quality: 'C', offense: 48, defense: 45, image: 'images/umut.jpg' },
{ name: 'Utku Koççu', position: 'PG', team: 'Esenler Erok', age: 18, points: 0.00, rebounds: 0.00, assists: 0.00, steals: 0.0, turnovers: 0.0, fouls: 0.0, salary: 700000, quality: 'D-', offense: 35, defense: 35, image: 'images/utku.jpg' },


    // ALAGÖZ IĞDIR (Tüm oyuncular)
    { name: 'Benoit Mbala', position: 'PF', team: 'Alagöz Iğdır', age: 25, points: 17.26, rebounds: 6.87, assists: 2.06, steals: 1.2, turnovers: 2.4, fouls: 2.8, salary: 1500000, quality: 'S-', offense: 82, defense: 78, image: 'images/mbala.jpg' },
    { name: 'Berk Çavdar', position: 'PG', team: 'Alagöz Iğdır', age: 25, points: 2.67, rebounds: 0.67, assists: 0.67, steals: 0.4, turnovers: 0.9, fouls: 1.2, salary: 800000, quality: 'D+', offense: 42, defense: 45, image: 'images/berk.jpg' },
    { name: 'Burak Erol', position: 'SG', team: 'Alagöz Iğdır', age: 32, points: 8.75, rebounds: 4.11, assists: 1.32, steals: 0.8, turnovers: 1.5, fouls: 2.1, salary: 1200000, quality: 'B-', offense: 52, defense: 54, image: 'images/burak.jpg' },
    { name: 'Burak Türsen', position: 'PF', team: 'Alagöz Iğdır', age: 21, points: 2.43, rebounds: 2.48, assists: 0.91, steals: 0.5, turnovers: 1.1, fouls: 1.8, salary: 900000, quality: 'D+', offense: 40, defense: 48, image: 'images/buraktur.jpg' },
    { name: 'Cem Coşkun', position: 'C', team: 'Alagöz Iğdır', age: 34, points: 4.00, rebounds: 3.42, assists: 1.06, steals: 0.6, turnovers: 1.2, fouls: 2.4, salary: 1100000, quality: 'C-', offense: 45, defense: 52, image: 'images/cem.jpg' },
    { name: 'Hasan Efe Uzun', position: 'PG', team: 'Alagöz Iğdır', age: 19, points: 0.50, rebounds: 0.75, assists: 0.00, steals: 0.2, turnovers: 0.5, fouls: 0.8, salary: 700000, quality: 'D-', offense: 35, defense: 40, image: 'images/hasan.jpg' },
    { name: 'Marlain Guy Veal', position: 'PG', team: 'Alagöz Iğdır', age: 26, points: 22.71, rebounds: 5.80, assists: 4.43, steals: 1.8, turnovers: 2.9, fouls: 2.5, salary: 2000000, quality: 'S+', offense: 92, defense: 85, image: 'images/marlain.jpg' },
    { name: 'Muhammet Ali Güneş', position: 'SG', team: 'Alagöz Iğdır', age: 19, points: 0.67, rebounds: 1.22, assists: 0.33, steals: 0.3, turnovers: 0.6, fouls: 0.9, salary: 600000, quality: 'D-', offense: 38, defense: 42, image: 'images/muhammet.jpg' },
    { name: 'Murat Kozan', position: 'PF', team: 'Alagöz Iğdır', age: 28, points: 5.61, rebounds: 3.06, assists: 0.61, steals: 0.7, turnovers: 1.3, fouls: 2.0, salary: 1300000, quality: 'C', offense: 48, defense: 52, image: 'images/murat.jpg' },
    { name: 'Murat Can Esen', position: 'SF', team: 'Alagöz Iğdır', age: 32, points: 4.33, rebounds: 1.44, assists: 0.26, steals: 0.4, turnovers: 1.0, fouls: 1.7, salary: 1200000, quality: 'C-', offense: 45, defense: 48, image: 'images/muratcan.jpg' },
    { name: 'Ömer Kaan Göğüş', position: 'PF', team: 'Alagöz Iğdır', age: 33, points: 2.63, rebounds: 2.26, assists: 0.48, steals: 0.5, turnovers: 1.1, fouls: 1.9, salary: 1000000, quality: 'D+', offense: 42, defense: 45, image: 'images/omerg.jpg' },
    { name: 'Önder Atun', position: 'SG', team: 'Alagöz Iğdır', age: 21, points: 5.86, rebounds: 2.92, assists: 1.42, steals: 0.8, turnovers: 1.4, fouls: 2.1, salary: 900000, quality: 'B-', offense: 60, defense: 68, image: 'images/onder.jpg' },
    { name: 'Özgür Şahin', position: 'SG', team: 'Alagöz Iğdır', age: 29, points: 6.40, rebounds: 2.20, assists: 0.37, steals: 0.6, turnovers: 1.2, fouls: 1.8, salary: 1100000, quality: 'C', offense: 48, defense: 50, image: 'images/ozgur.jpg' },
    { name: 'Robert Ridjell Upshaw III', position: 'C', team: 'Alagöz Iğdır', age: 30, points: 20.83, rebounds: 9.50, assists: 2.83, steals: 1.6, turnovers: 2.7, fouls: 2.9, salary: 2000000, quality: 'S', offense: 88, defense: 85, image: 'images/robert.jpg' },
    { name: 'Suat Cem Usal', position: 'PG', team: 'Alagöz Iğdır', age: 29, points: 1.44, rebounds: 1.06, assists: 0.47, steals: 0.3, turnovers: 0.8, fouls: 1.2, salary: 700000, quality: 'D-', offense: 38, defense: 42, image: 'images/suat.jpg' },
    { name: 'Şahin Muzaffer Ekemen', position: 'SF', team: 'Alagöz Iğdır', age: 32, points: 6.73, rebounds: 3.82, assists: 0.64, steals: 0.7, turnovers: 1.3, fouls: 2.0, salary: 1200000, quality: 'C+', offense: 52, defense: 55, image: 'images/sahin.jpg' },

        // BALIKESİR BELEDİYE
{ name: 'Alihan Deniz Genç', position: 'PG', team: 'Balıkesir Belediye', age: 24, points: 12.26, rebounds: 2.53, assists: 2.06, steals: 1.1, turnovers: 1.9, fouls: 2.0, salary: 1200000, quality: 'B+', offense: 62, defense: 58, image: 'images/alihan.jpg' },
{ name: 'Atakan Erdek', position: 'PG', team: 'Balıkesir Belediye', age: 21, points: 4.42, rebounds: 0.84, assists: 0.63, steals: 0.5, turnovers: 1.0, fouls: 1.4, salary: 900000, quality: 'C-', offense: 45, defense: 42, image: 'images/atakan.jpg' },
{ name: 'Berkan Aksu', position: 'SF', team: 'Balıkesir Belediye', age: 21, points: 5.14, rebounds: 2.29, assists: 1.39, steals: 0.6, turnovers: 1.2, fouls: 1.8, salary: 1100000, quality: 'C', offense: 48, defense: 52, image: 'images/berkan.jpg' },
{ name: 'Bora Can Işık', position: 'C', team: 'Balıkesir Belediye', age: 24, points: 2.68, rebounds: 1.79, assists: 1.07, steals: 0.4, turnovers: 0.9, fouls: 1.6, salary: 950000, quality: 'D+', offense: 42, defense: 45, image: 'images/bora.jpg' },
{ name: 'Fatih Kızılca', position: 'PF', team: 'Balıkesir Belediye', age: 30, points: 2.54, rebounds: 1.38, assists: 0.75, steals: 0.3, turnovers: 0.8, fouls: 1.5, salary: 850000, quality: 'D+', offense: 40, defense: 42, image: 'images/fatih.jpg' },
{ name: 'Gökhan Akkoyun', position: 'PF', team: 'Balıkesir Belediye', age: 27, points: 7.97, rebounds: 4.47, assists: 3.26, steals: 0.9, turnovers: 1.6, fouls: 2.2, salary: 1300000, quality: 'B-', offense: 54, defense: 58, image: 'images/gokhan.jpg' },
{ name: 'Jamari Rishard Traylor', position: 'C', team: 'Balıkesir Belediye', age: 30, points: 15.73, rebounds: 9.45, assists: 5.82, steals: 1.4, turnovers: 2.3, fouls: 2.8, salary: 2000000, quality: 'S-', offense: 82, defense: 84, image: 'images/jamari.jpg' },
{ name: 'Khalil Kyrie Shabazz', position: 'SG', team: 'Balıkesir Belediye', age: 24, points: 16.50, rebounds: 3.50, assists: 2.25, steals: 1.3, turnovers: 2.2, fouls: 2.3, salary: 1400000, quality: 'A', offense: 72, defense: 68, image: 'images/khalil.jpg' },
{ name: 'Mustafa Kürşad Özdemir', position: 'SF', team: 'Balıkesir Belediye', age: 24, points: 1.47, rebounds: 0.71, assists: 0.59, steals: 0.2, turnovers: 0.6, fouls: 1.1, salary: 800000, quality: 'D-', offense: 38, defense: 40, image: 'images/mustafak.jpg' },
{ name: 'Umar Atin', position: 'SG', team: 'Balıkesir Belediye', age: 28, points: 6.33, rebounds: 2.82, assists: 1.94, steals: 0.8, turnovers: 1.4, fouls: 2.0, salary: 1100000, quality: 'C+', offense: 52, defense: 55, image: 'images/umar.jpg' },
{ name: 'Ümit Sonkol', position: 'PF', team: 'Balıkesir Belediye', age: 39, points: 12.12, rebounds: 7.35, assists: 5.76, steals: 1.2, turnovers: 2.1, fouls: 2.6, salary: 1500000, quality: 'A-', offense: 68, defense: 72, image: 'images/umit.jpg' },
{ name: 'Yiğit Karalar', position: 'SG', team: 'Balıkesir Belediye', age: 19, points: 3.93, rebounds: 1.90, assists: 1.40, steals: 0.5, turnovers: 1.0, fouls: 1.7, salary: 700000, quality: 'C-', offense: 45, defense: 48, image: 'images/yigit.jpg' },

    // BORNOVA BELEDİYE
    { name: 'Alp Oktay', position: 'SF', team: 'Bornova Belediye', age: 21, points: 2.54, rebounds: 1.54, assists: 0.92, steals: 0.4, turnovers: 0.8, fouls: 1.4, salary: 800000, quality: 'D+', offense: 42, defense: 45, image: 'images/alp.jpg' },
    { name: 'Azizcan Özdemir', position: 'PF', team: 'Bornova Belediye', age: 34, points: 4.59, rebounds: 3.63, assists: 2.44, steals: 0.7, turnovers: 1.2, fouls: 2.1, salary: 1200000, quality: 'C', offense: 50, defense: 54, image: 'images/azizcan.jpg' },
    { name: 'Buğra Çal', position: 'PF', team: 'Bornova Belediye', age: 18, points: 5.29, rebounds: 2.44, assists: 1.74, steals: 0.6, turnovers: 1.3, fouls: 1.8, salary: 1000000, quality: 'C+', offense: 52, defense: 50, image: 'images/bugra.jpg' },
    { name: 'Burak Eşlik', position: 'SG', team: 'Bornova Belediye', age: 28, points: 10.93, rebounds: 2.33, assists: 1.53, steals: 0.9, turnovers: 1.7, fouls: 2.0, salary: 1500000, quality: 'B+', offense: 62, defense: 58, image: 'images/burak.jpg' },
    { name: 'Enis Kıvanç Çöl', position: 'SG', team: 'Bornova Belediye', age: 19, points: 6.88, rebounds: 2.71, assists: 1.56, steals: 0.7, turnovers: 1.4, fouls: 1.9, salary: 1100000, quality: 'C+', offense: 54, defense: 52, image: 'images/enis.jpg' },
    { name: 'Eray Akyüz', position: 'PG', team: 'Bornova Belediye', age: 22, points: 14.54, rebounds: 2.57, assists: 2.21, steals: 1.2, turnovers: 2.0, fouls: 2.1, salary: 1400000, quality: 'A-', offense: 68, defense: 65, image: 'images/eray.jpg' },
    { name: 'Eren Ocaktürk', position: 'PF', team: 'Bornova Belediye', age: 35, points: 8.13, rebounds: 3.91, assists: 3.03, steals: 0.8, turnovers: 1.6, fouls: 2.2, salary: 1300000, quality: 'B-', offense: 58, defense: 56, image: 'images/eren.jpg' },
    { name: 'Eylem Eminoğlu', position: 'PF', team: 'Bornova Belediye', age: 17, points: 1.33, rebounds: 1.87, assists: 0.93, steals: 0.3, turnovers: 0.7, fouls: 1.3, salary: 800000, quality: 'D-', offense: 40, defense: 42, image: 'images/eylem.jpg' },
    { name: 'Haktan Yavaş', position: 'SG', team: 'Bornova Belediye', age: 18, points: 0.13, rebounds: 0.63, assists: 0.25, steals: 0.2, turnovers: 0.4, fouls: 0.8, salary: 600000, quality: 'D-', offense: 35, defense: 38, image: 'images/haktan.jpg' },
    { name: 'Hüseyin Emir Seviğ', position: 'SF', team: 'Bornova Belediye', age: 17, points: 1.14, rebounds: 0.86, assists: 0.57, steals: 0.3, turnovers: 0.5, fouls: 1.0, salary: 700000, quality: 'D-', offense: 38, defense: 40, image: 'images/huseyin.jpg' },
    { name: 'Kılıçarslan Şenkahya', position: 'C', team: 'Bornova Belediye', age: 22, points: 6.07, rebounds: 3.93, assists: 2.64, steals: 0.7, turnovers: 1.4, fouls: 2.3, salary: 1200000, quality: 'B-', offense: 54, defense: 58, image: 'images/kilicarslan.jpg' },
    { name: 'Mert Konuk', position: 'SG', team: 'Bornova Belediye', age: 22, points: 8.68, rebounds: 2.06, assists: 1.52, steals: 0.8, turnovers: 1.5, fouls: 1.9, salary: 1300000, quality: 'B-', offense: 56, defense: 52, image: 'images/mert.jpg' },

// Gaziantep
{ name: 'Arda Birkeser', position: 'SG', team: 'Gaziantep', age: 19, points: 1.20, rebounds: 1.00, assists: 0.40, steals: 0.1, turnovers: 0.3, fouls: 0.7, salary: 900000, quality: 'D-', offense: 25, defense: 28, image: 'images/arda.jpg' },
{ name: 'Dusan Cantekin', position: 'C', team: 'Gaziantep', age: 31, points: 9.92, rebounds: 5.69, assists: 3.50, steals: 0.9, turnovers: 1.5, fouls: 2.0, salary: 1400000, quality: 'B-', offense: 65, defense: 68, image: 'images/dusan.jpg' },
{ name: 'Efe Sarica', position: 'SF', team: 'Gaziantep', age: 21, points: 3.04, rebounds: 1.70, assists: 1.22, steals: 0.3, turnovers: 0.7, fouls: 1.1, salary: 1100000, quality: 'D+', offense: 35, defense: 38, image: 'images/efe_s.jpg' },
{ name: 'Emir Arda Sivas', position: 'PG', team: 'Gaziantep', age: 19, points: 5.58, rebounds: 1.83, assists: 1.42, steals: 0.5, turnovers: 1.0, fouls: 1.4, salary: 1200000, quality: 'C+', offense: 48, defense: 45, image: 'images/emir_s.jpg' },
{ name: 'Emirali Göktürk', position: 'C', team: 'Gaziantep', age: 20, points: 2.05, rebounds: 1.48, assists: 0.90, steals: 0.2, turnovers: 0.5, fouls: 1.0, salary: 900000, quality: 'D-', offense: 30, defense: 32, image: 'images/emirali.jpg' },
{ name: 'Erkin Şenel', position: 'SF', team: 'Gaziantep', age: 25, points: 13.73, rebounds: 4.97, assists: 4.12, steals: 1.2, turnovers: 1.8, fouls: 2.1, salary: 1500000, quality: 'A-', offense: 75, defense: 72, image: 'images/erkin.jpg' },
{ name: 'Hasan Emir Gökalp', position: 'PG', team: 'Gaziantep', age: 29, points: 2.94, rebounds: 1.25, assists: 1.00, steals: 0.3, turnovers: 0.6, fouls: 1.0, salary: 1100000, quality: 'D+', offense: 32, defense: 35, image: 'images/hasan.jpg' },
{ name: 'Hüseyin Emre Yılmaz', position: 'SF', team: 'Gaziantep', age: 22, points: 0.80, rebounds: 0.95, assists: 0.75, steals: 0.1, turnovers: 0.3, fouls: 0.7, salary: 900000, quality: 'D-', offense: 22, defense: 25, image: 'images/huseyin.jpg' },
{ name: 'İbrahim Ethem Yılmaz', position: 'PF', team: 'Gaziantep', age: 20, points: 4.07, rebounds: 0.83, assists: 0.68, steals: 0.4, turnovers: 0.8, fouls: 1.2, salary: 1100000, quality: 'D+', offense: 38, defense: 35, image: 'images/ibrahim_e.jpg' },
{ name: 'Koray Çekici', position: 'PF', team: 'Gaziantep', age: 22, points: 12.20, rebounds: 7.28, assists: 4.68, steals: 1.1, turnovers: 1.7, fouls: 2.0, salary: 1400000, quality: 'A-', offense: 72, defense: 70, image: 'images/koray_ç.jpg' },
{ name: 'Maurice Jerome Charles Watson Jr', position: 'PG', team: 'Gaziantep', age: 31, points: 17.68, rebounds: 3.51, assists: 2.98, steals: 1.5, turnovers: 2.1, fouls: 2.3, salary: 1600000, quality: 'S-', offense: 85, defense: 80, image: 'images/maurice.jpg' },
{ name: 'Rolands Freimanis', position: 'PF', team: 'Gaziantep', age: 35, points: 14.64, rebounds: 6.23, assists: 4.59, steals: 1.2, turnovers: 1.8, fouls: 2.1, salary: 1500000, quality: 'A-', offense: 78, defense: 75, image: 'images/rolands.jpg' },
{ name: 'Turan Altunbaş', position: 'SG', team: 'Gaziantep', age: 18, points: 0.92, rebounds: 0.25, assists: 0.17, steals: 0.1, turnovers: 0.3, fouls: 0.6, salary: 900000, quality: 'D-', offense: 22, defense: 25, image: 'images/turan.jpg' },
{ name: 'Ufuk Tan Ertan', position: 'SF', team: 'Gaziantep', age: 20, points: 1.75, rebounds: 0.56, assists: 0.44, steals: 0.2, turnovers: 0.4, fouls: 0.8, salary: 900000, quality: 'D-', offense: 25, defense: 28, image: 'images/ufuk.jpg' },
{ name: 'Yiğit Onan', position: 'PF', team: 'Gaziantep', age: 21, points: 14.93, rebounds: 8.36, assists: 6.04, steals: 1.3, turnovers: 1.9, fouls: 2.2, salary: 1400000, quality: 'A', offense: 80, defense: 78, image: 'images/yigit_o.jpg' },

// Çayırova Belediye
{ name: 'Alp Karahan', position: 'SG', team: 'Çayırova Belediye', age: 24, points: 4.87, rebounds: 1.33, assists: 0.93, steals: 0.5, turnovers: 0.9, fouls: 1.3, salary: 1200000, quality: 'C-', offense: 42, defense: 45, image: 'images/alp.jpg' },
{ name: 'Başar Şener', position: 'SF', team: 'Çayırova Belediye', age: 18, points: 1.00, rebounds: 0.50, assists: 0.00, steals: 0.1, turnovers: 0.3, fouls: 0.6, salary: 600000, quality: 'D-', offense: 22, defense: 25, image: 'images/basar.jpg' },
{ name: 'Batuhan Güngör', position: 'SF', team: 'Çayırova Belediye', age: 26, points: 0.00, rebounds: 0.00, assists: 0.00, steals: 0.0, turnovers: 0.2, fouls: 0.4, salary: 500000, quality: 'D-', offense: 20, defense: 22, image: 'images/batuhan.jpg' },
{ name: 'Çağdaş Kayabaşı', position: 'PF', team: 'Çayırova Belediye', age: 22, points: 1.95, rebounds: 1.15, assists: 0.85, steals: 0.2, turnovers: 0.5, fouls: 1.0, salary: 1000000, quality: 'D+', offense: 32, defense: 35, image: 'images/cagdas.jpg' },
{ name: 'Diante Levan Watkins', position: 'PG', team: 'Çayırova Belediye', age: 32, points: 22.28, rebounds: 4.40, assists: 4.04, steals: 1.8, turnovers: 2.4, fouls: 2.5, salary: 1500000, quality: 'S+', offense: 90, defense: 85, image: 'images/diante.jpg' },
{ name: 'Elijah Reshard Thomas', position: 'C', team: 'Çayırova Belediye', age: 26, points: 0.00, rebounds: 0.00, assists: 0.00, steals: 0.0, turnovers: 0.2, fouls: 0.4, salary: 1200000, quality: 'D-', offense: 20, defense: 22, image: 'images/elijah.jpg' },
{ name: 'Enes Bayraktar', position: 'PG', team: 'Çayırova Belediye', age: 20, points: 2.09, rebounds: 1.04, assists: 0.78, steals: 0.3, turnovers: 0.6, fouls: 1.0, salary: 800000, quality: 'D+', offense: 32, defense: 35, image: 'images/enes.jpg' },
{ name: 'Eray Büyükcangaz', position: 'PG', team: 'Çayırova Belediye', age: 18, points: 2.17, rebounds: 0.56, assists: 0.33, steals: 0.2, turnovers: 0.5, fouls: 0.9, salary: 700000, quality: 'D+', offense: 30, defense: 32, image: 'images/eray.jpg' },
{ name: 'Ercan Bayrak', position: 'C', team: 'Çayırova Belediye', age: 25, points: 5.53, rebounds: 3.83, assists: 2.60, steals: 0.5, turnovers: 1.0, fouls: 1.5, salary: 1100000, quality: 'C+', offense: 48, defense: 52, image: 'images/ercan.jpg' },
{ name: 'İlkan Karaman', position: 'PF', team: 'Çayırova Belediye', age: 32, points: 16.21, rebounds: 8.93, assists: 6.62, steals: 1.4, turnovers: 2.0, fouls: 2.3, salary: 1400000, quality: 'S-', offense: 82, defense: 80, image: 'images/ilkan.jpg' },
{ name: 'Kutay Akpulat', position: 'SF', team: 'Çayırova Belediye', age: 25, points: 3.68, rebounds: 1.77, assists: 1.00, steals: 0.4, turnovers: 0.8, fouls: 1.2, salary: 900000, quality: 'D+', offense: 35, defense: 38, image: 'images/kutay.jpg' },
{ name: 'Oğuz Savaş', position: 'C', team: 'Çayırova Belediye', age: 35, points: 8.41, rebounds: 4.62, assists: 3.19, steals: 0.8, turnovers: 1.4, fouls: 1.8, salary: 1200000, quality: 'B-', offense: 58, defense: 62, image: 'images/oguz.jpg' },
{ name: 'Phillip Edward Greene IV', position: 'SG', team: 'Çayırova Belediye', age: 30, points: 16.50, rebounds: 3.43, assists: 3.00, steals: 1.4, turnovers: 1.9, fouls: 2.2, salary: 1300000, quality: 'S-', offense: 80, defense: 75, image: 'images/phillip.jpg' },
{ name: 'Sabahattin Can Göndür', position: 'SG', team: 'Çayırova Belediye', age: 27, points: 2.86, rebounds: 0.96, assists: 0.86, steals: 0.3, turnovers: 0.7, fouls: 1.1, salary: 900000, quality: 'D+', offense: 32, defense: 35, image: 'images/sabahattin.jpg' },
{ name: 'Serhat Uğur', position: 'SG', team: 'Çayırova Belediye', age: 37, points: 5.95, rebounds: 1.38, assists: 1.00, steals: 0.5, turnovers: 1.0, fouls: 1.4, salary: 1000000, quality: 'C-', offense: 45, defense: 42, image: 'images/serhat.jpg' },
{ name: 'Tolga Kaan Birer', position: 'PF', team: 'Çayırova Belediye', age: 24, points: 6.17, rebounds: 5.54, assists: 3.83, steals: 0.6, turnovers: 1.2, fouls: 1.7, salary: 1200000, quality: 'C+', offense: 50, defense: 55, image: 'images/tolga.jpg' },

 // Final Spor
 { name: 'Ahmet İlker Tunalı', position: 'PF', team: 'Final Spor', age: 29, points: 6.63, rebounds: 4.05, assists: 0.80, steals: 0.6, turnovers: 1.1, fouls: 1.5, salary: 1000000, quality: 'C+', offense: 52, defense: 55, image: 'images/ahmet.jpg' },
 { name: 'Aydın Şirin', position: 'PF', team: 'Final Spor', age: 20, points: 1.50, rebounds: 0.50, assists: 0.00, steals: 0.2, turnovers: 0.4, fouls: 0.8, salary: 700000, quality: 'D-', offense: 25, defense: 28, image: 'images/aydin.jpg' },
 { name: 'Brendan Nyke Medley-Bacon', position: 'C', team: 'Final Spor', age: 22, points: 11.20, rebounds: 8.44, assists: 2.66, steals: 1.0, turnovers: 1.7, fouls: 2.2, salary: 1200000, quality: 'A-', offense: 70, defense: 75, image: 'images/brendan.jpg' },
 { name: 'Can Özcan', position: 'SF', team: 'Final Spor', age: 33, points: 7.63, rebounds: 3.37, assists: 0.68, steals: 0.7, turnovers: 1.2, fouls: 1.6, salary: 900000, quality: 'C+', offense: 55, defense: 52, image: 'images/can.jpg' },
 { name: 'Deshon Davion Taylor', position: 'SG', team: 'Final Spor', age: 26, points: 19.67, rebounds: 4.03, assists: 0.44, steals: 1.5, turnovers: 2.1, fouls: 2.3, salary: 1500000, quality: 'S-', offense: 85, defense: 80, image: 'images/deshon.jpg' },
 { name: 'Egemen Usta', position: 'SF', team: 'Final Spor', age: 19, points: 0.90, rebounds: 0.70, assists: 0.20, steals: 0.1, turnovers: 0.3, fouls: 0.7, salary: 600000, quality: 'D-', offense: 22, defense: 25, image: 'images/egemen.jpg' },
 { name: 'Hidayet Civan', position: 'C', team: 'Final Spor', age: 24, points: 1.52, rebounds: 1.84, assists: 0.74, steals: 0.2, turnovers: 0.5, fouls: 1.0, salary: 800000, quality: 'D-', offense: 28, defense: 32, image: 'images/hidayet.jpg' },
 { name: 'Kerem Aydan Özel', position: 'PG', team: 'Final Spor', age: 24, points: 8.90, rebounds: 1.78, assists: 0.20, steals: 0.8, turnovers: 1.3, fouls: 1.7, salary: 1000000, quality: 'B-', offense: 60, defense: 55, image: 'images/kerem.jpg' },
 { name: 'Mustafa Baştürk', position: 'SG', team: 'Final Spor', age: 26, points: 8.97, rebounds: 2.09, assists: 0.46, steals: 0.8, turnovers: 1.3, fouls: 1.7, salary: 1100000, quality: 'B-', offense: 62, defense: 58, image: 'images/mustafa.jpg' },
 { name: 'Ozan Yılmaz', position: 'PG', team: 'Final Spor', age: 19, points: 4.03, rebounds: 2.45, assists: 0.92, steals: 0.4, turnovers: 0.8, fouls: 1.2, salary: 700000, quality: 'C-', offense: 38, defense: 40, image: 'images/ozan.jpg' },
 { name: 'Recep Doğrusöz', position: 'SF', team: 'Final Spor', age: 36, points: 6.63, rebounds: 2.15, assists: 0.29, steals: 0.6, turnovers: 1.0, fouls: 1.4, salary: 900000, quality: 'C', offense: 48, defense: 45, image: 'images/recep.jpg' },
 { name: 'Talat Alp Altunbey', position: 'C', team: 'Final Spor', age: 28, points: 6.12, rebounds: 3.63, assists: 1.15, steals: 0.6, turnovers: 1.1, fouls: 1.6, salary: 1200000, quality: 'C', offense: 45, defense: 48, image: 'images/talat.jpg' },
 { name: 'Yunus Emre Hamatoğlu', position: 'PF', team: 'Final Spor', age: 19, points: 5.00, rebounds: 6.00, assists: 0.00, steals: 0.5, turnovers: 0.9, fouls: 1.4, salary: 600000, quality: 'C', offense: 42, defense: 45, image: 'images/yunus.jpg' },

// San Antonio Spurs
{ name: 'Tony Parker', position: 'PG', team: 'San Antonio Spurs', age: 32, points: 14.4, rebounds: 1.9, assists: 4.9, steals: 0.6, turnovers: 2.2, fouls: 1.3, salary: 12500000, quality: 'X', offense: 85, defense: 80, image: 'images/parker.jpg' },
{ name: 'Danny Green', position: 'SG', team: 'San Antonio Spurs', age: 27, points: 11.7, rebounds: 4.2, assists: 2.0, steals: 1.2, turnovers: 1.1, fouls: 2.0, salary: 4025000, quality: 'X', offense: 82, defense: 85, image: 'images/green.jpg' },
{ name: 'Kawhi Leonard', position: 'SF', team: 'San Antonio Spurs', age: 23, points: 16.5, rebounds: 7.2, assists: 2.5, steals: 2.3, turnovers: 1.5, fouls: 1.8, salary: 2894059, quality: 'X', offense: 88, defense: 92, image: 'images/leonard.jpg' },
{ name: 'Tim Duncan', position: 'PF', team: 'San Antonio Spurs', age: 38, points: 13.9, rebounds: 9.1, assists: 3.0, steals: 0.8, turnovers: 1.6, fouls: 1.9, salary: 10361446, quality: 'X', offense: 85, defense: 88, image: 'images/duncan.jpg' },
{ name: 'Tiago Splitter', position: 'C', team: 'San Antonio Spurs', age: 30, points: 8.2, rebounds: 4.8, assists: 1.5, steals: 0.5, turnovers: 1.1, fouls: 2.1, salary: 9250000, quality: 'X', offense: 75, defense: 82, image: 'images/splitter.jpg' },
{ name: 'Manu Ginobili', position: 'SG', team: 'San Antonio Spurs', age: 37, points: 10.5, rebounds: 3.0, assists: 4.2, steals: 1.0, turnovers: 2.0, fouls: 1.8, salary: 7000000, quality: 'X', offense: 82, defense: 78, image: 'images/ginobili.jpg' },
{ name: 'Boris Diaw', position: 'PF', team: 'San Antonio Spurs', age: 32, points: 8.7, rebounds: 4.3, assists: 2.9, steals: 0.5, turnovers: 1.3, fouls: 1.7, salary: 7500000, quality: 'X', offense: 78, defense: 80, image: 'images/diaw.jpg' },
{ name: 'Patty Mills', position: 'PG', team: 'San Antonio Spurs', age: 26, points: 6.9, rebounds: 1.5, assists: 1.7, steals: 0.6, turnovers: 0.9, fouls: 1.1, salary: 3578947, quality: 'X', offense: 75, defense: 75, image: 'images/mills.jpg' },
{ name: 'Marco Belinelli', position: 'SG', team: 'San Antonio Spurs', age: 28, points: 9.2, rebounds: 2.5, assists: 1.5, steals: 0.4, turnovers: 0.9, fouls: 1.2, salary: 2873750, quality: 'X', offense: 78, defense: 72, image: 'images/belinelli.jpg' },

// Portland Trail Blazers
{ name: 'Damian Lillard', position: 'PG', team: 'Portland Trail Blazers', age: 24, points: 21.0, rebounds: 4.6, assists: 6.2, steals: 1.2, turnovers: 2.7, fouls: 2.0, salary: 4236287, quality: 'X', offense: 90, defense: 82, image: 'images/lillard.jpg' },
{ name: 'Wesley Matthews', position: 'SG', team: 'Portland Trail Blazers', age: 28, points: 15.9, rebounds: 3.7, assists: 2.3, steals: 1.3, turnovers: 1.4, fouls: 2.3, salary: 7245640, quality: 'X', offense: 85, defense: 84, image: 'images/matthews.jpg' },
{ name: 'Nicolas Batum', position: 'SF', team: 'Portland Trail Blazers', age: 26, points: 9.4, rebounds: 5.9, assists: 4.8, steals: 1.1, turnovers: 1.9, fouls: 1.8, salary: 11765500, quality: 'X', offense: 82, defense: 85, image: 'images/batum.jpg' },
{ name: 'LaMarcus Aldridge', position: 'PF', team: 'Portland Trail Blazers', age: 29, points: 23.4, rebounds: 10.2, assists: 1.7, steals: 0.7, turnovers: 1.9, fouls: 2.0, salary: 16006000, quality: 'X', offense: 92, defense: 85, image: 'images/aldridge.jpg' },
{ name: 'Robin Lopez', position: 'C', team: 'Portland Trail Blazers', age: 26, points: 9.6, rebounds: 6.7, assists: 0.9, steals: 0.3, turnovers: 1.3, fouls: 2.8, salary: 5340229, quality: 'X', offense: 78, defense: 85, image: 'images/lopez.jpg' },
{ name: 'Chris Kaman', position: 'C', team: 'Portland Trail Blazers', age: 32, points: 8.6, rebounds: 6.5, assists: 1.0, steals: 0.3, turnovers: 1.3, fouls: 2.3, salary: 4800000, quality: 'X', offense: 75, defense: 78, image: 'images/kaman.jpg' },
{ name: 'Steve Blake', position: 'PG', team: 'Portland Trail Blazers', age: 34, points: 4.3, rebounds: 1.7, assists: 3.6, steals: 0.7, turnovers: 1.1, fouls: 1.4, salary: 2077000, quality: 'X', offense: 72, defense: 75, image: 'images/blake.jpg' },
{ name: 'CJ McCollum', position: 'SG', team: 'Portland Trail Blazers', age: 23, points: 6.8, rebounds: 1.5, assists: 1.0, steals: 0.7, turnovers: 0.8, fouls: 1.5, salary: 2421000, quality: 'X', offense: 75, defense: 72, image: 'images/mccollum.jpg' },
{ name: 'Meyers Leonard', position: 'C', team: 'Portland Trail Blazers', age: 22, points: 5.9, rebounds: 4.5, assists: 0.6, steals: 0.2, turnovers: 0.7, fouls: 2.3, salary: 2317920, quality: 'X', offense: 72, defense: 75, image: 'images/leonard.jpg' }

];

// Takımlar ve oyuncular verisi
window.teams = [
    
    {
        name: 'BALIKESİR BÜYÜKŞEHİR BELEDİYE',
        players: [
            { name: 'Alihan Deniz Genç', position: 'PG', team: 'Balıkesir Belediye', age: 24, points: 12.26, rebounds: 2.53, assists: 2.06, steals: 1.1, turnovers: 1.9, fouls: 2.0, salary: 1200000, quality: 'B+', offense: 62, defense: 58, image: 'images/alihan.jpg' },
            { name: 'Atakan Erdek', position: 'PG', team: 'Balıkesir Belediye', age: 21, points: 4.42, rebounds: 0.84, assists: 0.63, steals: 0.5, turnovers: 1.0, fouls: 1.4, salary: 900000, quality: 'C-', offense: 45, defense: 42, image: 'images/atakan.jpg' },
            { name: 'Berkan Aksu', position: 'SF', team: 'Balıkesir Belediye', age: 21, points: 5.14, rebounds: 2.29, assists: 1.39, steals: 0.6, turnovers: 1.2, fouls: 1.8, salary: 1100000, quality: 'C', offense: 48, defense: 52, image: 'images/berkan.jpg' },
            { name: 'Bora Can Işık', position: 'C', team: 'Balıkesir Belediye', age: 24, points: 2.68, rebounds: 1.79, assists: 1.07, steals: 0.4, turnovers: 0.9, fouls: 1.6, salary: 950000, quality: 'D+', offense: 42, defense: 45, image: 'images/bora.jpg' },
            { name: 'Fatih Kızılca', position: 'PF', team: 'Balıkesir Belediye', age: 30, points: 2.54, rebounds: 1.38, assists: 0.75, steals: 0.3, turnovers: 0.8, fouls: 1.5, salary: 850000, quality: 'D+', offense: 40, defense: 42, image: 'images/fatih.jpg' },
            { name: 'Gökhan Akkoyun', position: 'PF', team: 'Balıkesir Belediye', age: 27, points: 7.97, rebounds: 4.47, assists: 3.26, steals: 0.9, turnovers: 1.6, fouls: 2.2, salary: 1300000, quality: 'B-', offense: 54, defense: 58, image: 'images/gokhan.jpg' },
            { name: 'Jamari Rishard Traylor', position: 'C', team: 'Balıkesir Belediye', age: 30, points: 15.73, rebounds: 9.45, assists: 5.82, steals: 1.4, turnovers: 2.3, fouls: 2.8, salary: 2000000, quality: 'S-', offense: 82, defense: 84, image: 'images/jamari.jpg' },
            { name: 'Khalil Kyrie Shabazz', position: 'SG', team: 'Balıkesir Belediye', age: 24, points: 16.50, rebounds: 3.50, assists: 2.25, steals: 1.3, turnovers: 2.2, fouls: 2.3, salary: 1400000, quality: 'A', offense: 72, defense: 68, image: 'images/khalil.jpg' },
            { name: 'Mustafa Kürşad Özdemir', position: 'SF', team: 'Balıkesir Belediye', age: 24, points: 1.47, rebounds: 0.71, assists: 0.59, steals: 0.2, turnovers: 0.6, fouls: 1.1, salary: 800000, quality: 'D-', offense: 38, defense: 40, image: 'images/mustafak.jpg' },
            { name: 'Umar Atin', position: 'SG', team: 'Balıkesir Belediye', age: 28, points: 6.33, rebounds: 2.82, assists: 1.94, steals: 0.8, turnovers: 1.4, fouls: 2.0, salary: 1100000, quality: 'C+', offense: 52, defense: 55, image: 'images/umar.jpg' },
            { name: 'Ümit Sonkol', position: 'PF', team: 'Balıkesir Belediye', age: 39, points: 12.12, rebounds: 7.35, assists: 5.76, steals: 1.2, turnovers: 2.1, fouls: 2.6, salary: 1500000, quality: 'A-', offense: 68, defense: 72, image: 'images/umit.jpg' },
            { name: 'Yiğit Karalar', position: 'SG', team: 'Balıkesir Belediye', age: 19, points: 3.93, rebounds: 1.90, assists: 1.40, steals: 0.5, turnovers: 1.0, fouls: 1.7, salary: 700000, quality: 'C-', offense: 45, defense: 48, image: 'images/yigit.jpg' },
        ]
    },
    {
        name: 'BORNAOVA BELEDİYESİ KARŞIYAKA',
        players: [
            { name: 'Alp Oktay', position: 'SF', team: 'Bornova Belediye', age: 21, points: 2.54, rebounds: 1.54, assists: 0.92, steals: 0.4, turnovers: 0.8, fouls: 1.4, salary: 800000, quality: 'D+', offense: 42, defense: 45, image: 'images/alp.jpg' },
            { name: 'Azizcan Özdemir', position: 'PF', team: 'Bornova Belediye', age: 34, points: 4.59, rebounds: 3.63, assists: 2.44, steals: 0.7, turnovers: 1.2, fouls: 2.1, salary: 1200000, quality: 'C', offense: 50, defense: 54, image: 'images/azizcan.jpg' },
            { name: 'Buğra Çal', position: 'PF', team: 'Bornova Belediye', age: 18, points: 5.29, rebounds: 2.44, assists: 1.74, steals: 0.6, turnovers: 1.3, fouls: 1.8, salary: 1000000, quality: 'C+', offense: 52, defense: 50, image: 'images/bugra.jpg' },
            { name: 'Burak Eşlik', position: 'SG', team: 'Bornova Belediye', age: 28, points: 10.93, rebounds: 2.33, assists: 1.53, steals: 0.9, turnovers: 1.7, fouls: 2.0, salary: 1500000, quality: 'B+', offense: 62, defense: 58, image: 'images/burak.jpg' },
            { name: 'Enis Kıvanç Çöl', position: 'SG', team: 'Bornova Belediye', age: 19, points: 6.88, rebounds: 2.71, assists: 1.56, steals: 0.7, turnovers: 1.4, fouls: 1.9, salary: 1100000, quality: 'C+', offense: 54, defense: 52, image: 'images/enis.jpg' },
            { name: 'Eray Akyüz', position: 'PG', team: 'Bornova Belediye', age: 22, points: 14.54, rebounds: 2.57, assists: 2.21, steals: 1.2, turnovers: 2.0, fouls: 2.1, salary: 1400000, quality: 'A-', offense: 68, defense: 65, image: 'images/eray.jpg' },
            { name: 'Eren Ocaktürk', position: 'PF', team: 'Bornova Belediye', age: 35, points: 8.13, rebounds: 3.91, assists: 3.03, steals: 0.8, turnovers: 1.6, fouls: 2.2, salary: 1300000, quality: 'B-', offense: 58, defense: 56, image: 'images/eren.jpg' },
            { name: 'Eylem Eminoğlu', position: 'PF', team: 'Bornova Belediye', age: 17, points: 1.33, rebounds: 1.87, assists: 0.93, steals: 0.3, turnovers: 0.7, fouls: 1.3, salary: 800000, quality: 'D-', offense: 40, defense: 42, image: 'images/eylem.jpg' },
            { name: 'Haktan Yavaş', position: 'SG', team: 'Bornova Belediye', age: 18, points: 0.13, rebounds: 0.63, assists: 0.25, steals: 0.2, turnovers: 0.4, fouls: 0.8, salary: 600000, quality: 'D-', offense: 35, defense: 38, image: 'images/haktan.jpg' },
            { name: 'Hüseyin Emir Seviğ', position: 'SF', team: 'Bornova Belediye', age: 17, points: 1.14, rebounds: 0.86, assists: 0.57, steals: 0.3, turnovers: 0.5, fouls: 1.0, salary: 700000, quality: 'D-', offense: 38, defense: 40, image: 'images/huseyin.jpg' },
            { name: 'Kılıçarslan Şenkahya', position: 'C', team: 'Bornova Belediye', age: 22, points: 6.07, rebounds: 3.93, assists: 2.64, steals: 0.7, turnovers: 1.4, fouls: 2.3, salary: 1200000, quality: 'B-', offense: 54, defense: 58, image: 'images/kilicarslan.jpg' },
            { name: 'Mert Konuk', position: 'SG', team: 'Bornova Belediye', age: 22, points: 8.68, rebounds: 2.06, assists: 1.52, steals: 0.8, turnovers: 1.5, fouls: 1.9, salary: 1300000, quality: 'B-', offense: 56, defense: 52, image: 'images/mert.jpg' },
            
    
            ]
        },
        {
            name: 'ÇAYIROVA BELEDİYESİ',
            players: [
                { name: 'Alp Karahan', position: 'SG', team: 'Çayırova Belediye', age: 24, points: 4.87, rebounds: 1.33, assists: 0.93, steals: 0.5, turnovers: 0.9, fouls: 1.3, salary: 1200000, quality: 'C-', offense: 42, defense: 45, image: 'images/alp.jpg' },
                { name: 'Başar Şener', position: 'SF', team: 'Çayırova Belediye', age: 18, points: 1.00, rebounds: 0.50, assists: 0.00, steals: 0.1, turnovers: 0.3, fouls: 0.6, salary: 600000, quality: 'D-', offense: 22, defense: 25, image: 'images/basar.jpg' },
                { name: 'Batuhan Güngör', position: 'SF', team: 'Çayırova Belediye', age: 26, points: 0.00, rebounds: 0.00, assists: 0.00, steals: 0.0, turnovers: 0.2, fouls: 0.4, salary: 500000, quality: 'D-', offense: 20, defense: 22, image: 'images/batuhan.jpg' },
                { name: 'Çağdaş Kayabaşı', position: 'PF', team: 'Çayırova Belediye', age: 22, points: 1.95, rebounds: 1.15, assists: 0.85, steals: 0.2, turnovers: 0.5, fouls: 1.0, salary: 1000000, quality: 'D+', offense: 32, defense: 35, image: 'images/cagdas.jpg' },
                { name: 'Diante Levan Watkins', position: 'PG', team: 'Çayırova Belediye', age: 32, points: 22.28, rebounds: 4.40, assists: 4.04, steals: 1.8, turnovers: 2.4, fouls: 2.5, salary: 1500000, quality: 'S+', offense: 90, defense: 85, image: 'images/diante.jpg' },
                { name: 'Elijah Reshard Thomas', position: 'C', team: 'Çayırova Belediye', age: 26, points: 0.00, rebounds: 0.00, assists: 0.00, steals: 0.0, turnovers: 0.2, fouls: 0.4, salary: 1200000, quality: 'D-', offense: 20, defense: 22, image: 'images/elijah.jpg' },
                { name: 'Enes Bayraktar', position: 'PG', team: 'Çayırova Belediye', age: 20, points: 2.09, rebounds: 1.04, assists: 0.78, steals: 0.3, turnovers: 0.6, fouls: 1.0, salary: 800000, quality: 'D+', offense: 32, defense: 35, image: 'images/enes.jpg' },
                { name: 'Eray Büyükcangaz', position: 'PG', team: 'Çayırova Belediye', age: 18, points: 2.17, rebounds: 0.56, assists: 0.33, steals: 0.2, turnovers: 0.5, fouls: 0.9, salary: 700000, quality: 'D+', offense: 30, defense: 32, image: 'images/eray.jpg' },
                { name: 'Ercan Bayrak', position: 'C', team: 'Çayırova Belediye', age: 25, points: 5.53, rebounds: 3.83, assists: 2.60, steals: 0.5, turnovers: 1.0, fouls: 1.5, salary: 1100000, quality: 'C+', offense: 48, defense: 52, image: 'images/ercan.jpg' },
                { name: 'İlkan Karaman', position: 'PF', team: 'Çayırova Belediye', age: 32, points: 16.21, rebounds: 8.93, assists: 6.62, steals: 1.4, turnovers: 2.0, fouls: 2.3, salary: 1400000, quality: 'S-', offense: 82, defense: 80, image: 'images/ilkan.jpg' },
                { name: 'Kutay Akpulat', position: 'SF', team: 'Çayırova Belediye', age: 25, points: 3.68, rebounds: 1.77, assists: 1.00, steals: 0.4, turnovers: 0.8, fouls: 1.2, salary: 900000, quality: 'D+', offense: 35, defense: 38, image: 'images/kutay.jpg' },
                { name: 'Oğuz Savaş', position: 'C', team: 'Çayırova Belediye', age: 35, points: 8.41, rebounds: 4.62, assists: 3.19, steals: 0.8, turnovers: 1.4, fouls: 1.8, salary: 1200000, quality: 'B-', offense: 58, defense: 62, image: 'images/oguz.jpg' },
                { name: 'Phillip Edward Greene IV', position: 'SG', team: 'Çayırova Belediye', age: 30, points: 16.50, rebounds: 3.43, assists: 3.00, steals: 1.4, turnovers: 1.9, fouls: 2.2, salary: 1300000, quality: 'S-', offense: 80, defense: 75, image: 'images/phillip.jpg' },
                { name: 'Sabahattin Can Göndür', position: 'SG', team: 'Çayırova Belediye', age: 27, points: 2.86, rebounds: 0.96, assists: 0.86, steals: 0.3, turnovers: 0.7, fouls: 1.1, salary: 900000, quality: 'D+', offense: 32, defense: 35, image: 'images/sabahattin.jpg' },
                { name: 'Serhat Uğur', position: 'SG', team: 'Çayırova Belediye', age: 37, points: 5.95, rebounds: 1.38, assists: 1.00, steals: 0.5, turnovers: 1.0, fouls: 1.4, salary: 1000000, quality: 'C-', offense: 45, defense: 42, image: 'images/serhat.jpg' },
                { name: 'Tolga Kaan Birer', position: 'PF', team: 'Çayırova Belediye', age: 24, points: 6.17, rebounds: 5.54, assists: 3.83, steals: 0.6, turnovers: 1.2, fouls: 1.7, salary: 1200000, quality: 'C+', offense: 50, defense: 55, image: 'images/tolga.jpg' },
            
            ]
        },
        {
            name: 'ESENLER EROKSPOR',
            players: [
                { name: 'Altan Erol', position: 'SF', team: 'Esenler Erok', age: 39, points: 9.76, rebounds: 3.62, assists: 2.15, steals: 0.9, turnovers: 1.6, fouls: 2.1, salary: 1400000, quality: 'B-', offense: 58, defense: 54, image: 'images/altan.jpg' },
                { name: 'Anthony Keith Morse', position: 'PF', team: 'Esenler Erok', age: 28, points: 20.06, rebounds: 7.67, assists: 4.72, steals: 1.5, turnovers: 2.5, fouls: 2.8, salary: 1500000, quality: 'S', offense: 85, defense: 78, image: 'images/anthony.jpg' },
                { name: 'Deniz Can Çevik', position: 'SG', team: 'Esenler Erok', age: 28, points: 4.81, rebounds: 1.63, assists: 1.31, steals: 0.5, turnovers: 1.0, fouls: 1.6, salary: 1200000, quality: 'D+', offense: 45, defense: 42, image: 'images/deniz.jpg' },
                { name: 'Görkem Doğan', position: 'C', team: 'Esenler Erok', age: 24, points: 1.94, rebounds: 1.00, assists: 0.69, steals: 0.3, turnovers: 0.6, fouls: 1.2, salary: 1100000, quality: 'D-', offense: 38, defense: 40, image: 'images/gorkem.jpg' },
                { name: 'Kahlil Quinton Dukes', position: 'PG', team: 'Esenler Erok', age: 27, points: 20.08, rebounds: 3.50, assists: 3.33, steals: 1.6, turnovers: 2.6, fouls: 2.3, salary: 1300000, quality: 'S-', offense: 84, defense: 72, image: 'images/kahlil.jpg' },
                { name: 'Murat Göktaş', position: 'PF', team: 'Esenler Erok', age: 35, points: 5.53, rebounds: 2.35, assists: 1.94, steals: 0.6, turnovers: 1.2, fouls: 1.8, salary: 1400000, quality: 'C-', offense: 48, defense: 45, image: 'images/murat.jpg' },
                { name: 'Mustafa Erdoğan', position: 'PF', team: 'Esenler Erok', age: 29, points: 5.86, rebounds: 3.91, assists: 3.23, steals: 0.7, turnovers: 1.3, fouls: 2.0, salary: 1300000, quality: 'C', offense: 52, defense: 54, image: 'images/mustafa.jpg' },
                { name: 'Tarık Çolak', position: 'PG', team: 'Esenler Erok', age: 25, points: 0.64, rebounds: 0.18, assists: 0.09, steals: 0.1, turnovers: 0.3, fouls: 0.8, salary: 900000, quality: 'D-', offense: 35, defense: 38, image: 'images/tarik.jpg' },
                { name: 'Tayfun Erülkü', position: 'PG', team: 'Esenler Erok', age: 28, points: 13.41, rebounds: 5.88, assists: 4.35, steals: 1.2, turnovers: 2.0, fouls: 2.4, salary: 1500000, quality: 'A-', offense: 72, defense: 68, image: 'images/tayfun.jpg' },
                { name: 'Tuna Han Dikmen', position: 'PF', team: 'Esenler Erok', age: 28, points: 4.52, rebounds: 3.97, assists: 2.73, steals: 0.5, turnovers: 1.1, fouls: 1.9, salary: 1300000, quality: 'C-', offense: 46, defense: 50, image: 'images/tuna.jpg' },
                { name: 'Umut Geçen', position: 'SG', team: 'Esenler Erok', age: 25, points: 5.76, rebounds: 1.68, assists: 1.26, steals: 0.6, turnovers: 1.2, fouls: 1.7, salary: 1100000, quality: 'C', offense: 48, defense: 45, image: 'images/umut.jpg' },
                { name: 'Utku Koççu', position: 'PG', team: 'Esenler Erok', age: 18, points: 0.00, rebounds: 0.00, assists: 0.00, steals: 0.0, turnovers: 0.0, fouls: 0.0, salary: 700000, quality: 'D-', offense: 35, defense: 35, image: 'images/utku.jpg' },
              
            ]
        },
        {
            name: 'FENERBAHÇE KOLEJİ NOVOTEL',
            players: [
                { name: 'Barış Yeniay', position: 'SF', team: 'Fenerbahçe Koleji', age: 25, points: 4.18, rebounds: 3.82, assists: 2.94, steals: 0.8, turnovers: 1.2, fouls: 1.8, salary: 1300000, quality: 'C-', offense: 42, defense: 45, image: 'images/baris.jpg' },
                { name: 'Edward Jamal Croswell', position: 'PF', team: 'Fenerbahçe Koleji', age: 25, points: 19.09, rebounds: 9.30, assists: 5.73, steals: 1.4, turnovers: 2.3, fouls: 2.8, salary: 1600000, quality: 'S-', offense: 82, defense: 78, image: 'images/edward.jpg' },
                { name: 'Eren Deniz', position: 'SG', team: 'Fenerbahçe Koleji', age: 20, points: 2.93, rebounds: 2.44, assists: 1.81, steals: 0.5, turnovers: 0.9, fouls: 1.4, salary: 1100000, quality: 'D+', offense: 35, defense: 38, image: 'images/eren.jpg' },
                { name: 'Faruk Biberoviç', position: 'PF', team: 'Fenerbahçe Koleji', age: 19, points: 3.38, rebounds: 2.21, assists: 1.71, steals: 0.4, turnovers: 1.1, fouls: 1.6, salary: 1000000, quality: 'D+', offense: 36, defense: 39, image: 'images/faruk.jpg' },
                { name: 'Gökay Hacıoğlu', position: 'PF', team: 'Fenerbahçe Koleji', age: 22, points: 10.56, rebounds: 5.42, assists: 3.83, steals: 1.1, turnovers: 1.8, fouls: 2.3, salary: 1400000, quality: 'A-', offense: 68, defense: 65, image: 'images/gokay.jpg' },
                { name: 'Gökhan Edge Demirli', position: 'SG', team: 'Fenerbahçe Koleji', age: 25, points: 4.00, rebounds: 2.00, assists: 1.77, steals: 0.6, turnovers: 1.0, fouls: 1.5, salary: 1200000, quality: 'C-', offense: 41, defense: 43, image: 'images/gokhan.jpg' },
                { name: 'Hakan Turan Gökcek', position: 'PG', team: 'Fenerbahçe Koleji', age: 19, points: 0, rebounds: 0, assists: 0, steals: 0.1, turnovers: 0.4, fouls: 0.5, salary: 1000000, quality: 'D-', offense: 25, defense: 28, image: 'images/hakan.jpg' },
                { name: 'Kadir Yiğit Yancı', position: 'SG', team: 'Fenerbahçe Koleji', age: 19, points: 1.50, rebounds: 0.50, assists: 0.50, steals: 0.2, turnovers: 0.6, fouls: 0.8, salary: 900000, quality: 'D-', offense: 28, defense: 30, image: 'images/kadir.jpg' },
                { name: 'Kutay Odabaşı', position: 'PF', team: 'Fenerbahçe Koleji', age: 20, points: 2.87, rebounds: 0.47, assists: 0.27, steals: 0.3, turnovers: 0.8, fouls: 1.2, salary: 1100000, quality: 'D+', offense: 34, defense: 36, image: 'images/kutay.jpg' },
                { name: 'Mert Emre Ekşioğlu', position: 'SG', team: 'Fenerbahçe Koleji', age: 22, points: 8.20, rebounds: 2.37, assists: 1.53, steals: 0.8, turnovers: 1.4, fouls: 1.9, salary: 1300000, quality: 'B-', offense: 56, defense: 52, image: 'images/mert.jpg' },
                { name: 'Michale Jerome Davis Jr', position: 'PG', team: 'Fenerbahçe Koleji', age: 28, points: 25.32, rebounds: 5.19, assists: 4.39, steals: 1.6, turnovers: 2.8, fouls: 2.4, salary: 1800000, quality: 'S+', offense: 88, defense: 82, image: 'images/michale.jpg' },
                { name: 'Oğuzhan Göktepe', position: 'SG', team: 'Fenerbahçe Koleji', age: 20, points: 3.57, rebounds: 0.57, assists: 0.46, steals: 0.4, turnovers: 0.9, fouls: 1.3, salary: 1000000, quality: 'D+', offense: 38, defense: 35, image: 'images/oguzhan.jpg' },
                { name: 'Okay Camgöz', position: 'SF', team: 'Fenerbahçe Koleji', age: 23, points: 5.11, rebounds: 1.67, assists: 1.44, steals: 0.7, turnovers: 1.2, fouls: 1.7, salary: 1100000, quality: 'C', offense: 45, defense: 48, image: 'images/okay.jpg' },
                { name: 'Utku Saraloğlu', position: 'PG', team: 'Fenerbahçe Koleji', age: 27, points: 6.60, rebounds: 2.87, assists: 2.27, steals: 0.9, turnovers: 1.5, fouls: 2.0, salary: 1200000, quality: 'C+', offense: 52, defense: 50, image: 'images/utku.jpg' },
                { name: 'Yiğit Özkan', position: 'SG', team: 'Fenerbahçe Koleji', age: 23, points: 6.06, rebounds: 2.50, assists: 1.78, steals: 0.8, turnovers: 1.3, fouls: 1.8, salary: 1100000, quality: 'C+', offense: 50, defense: 48, image: 'images/yigit.jpg' },
                { name: 'Yiğit Hamza Mestoğlu', position: 'PF', team: 'Fenerbahçe Koleji', age: 20, points: 10.62, rebounds: 4.54, assists: 3.08, steals: 1.0, turnovers: 1.7, fouls: 2.2, salary: 1300000, quality: 'A-', offense: 65, defense: 62, image: 'images/yigit_hamza.jpg' },
                { name: 'Yusuf Bayrak', position: 'SF', team: 'Fenerbahçe Koleji', age: 21, points: 2.28, rebounds: 1.76, assists: 1.36, steals: 0.4, turnovers: 0.8, fouls: 1.2, salary: 1000000, quality: 'D+', offense: 32, defense: 35, image: 'images/yusuf.jpg' },

            ]
        },
        {
            name: 'FİNAL SPOR',
            players: [
                { name: 'Ahmet İlker Tunalı', position: 'PF', team: 'Final Spor', age: 29, points: 6.63, rebounds: 4.05, assists: 0.80, steals: 0.6, turnovers: 1.1, fouls: 1.5, salary: 1000000, quality: 'C+', offense: 52, defense: 55, image: 'images/ahmet.jpg' },
                { name: 'Aydın Şirin', position: 'PF', team: 'Final Spor', age: 20, points: 1.50, rebounds: 0.50, assists: 0.00, steals: 0.2, turnovers: 0.4, fouls: 0.8, salary: 700000, quality: 'D-', offense: 25, defense: 28, image: 'images/aydin.jpg' },
                { name: 'Brendan Nyke Medley-Bacon', position: 'C', team: 'Final Spor', age: 22, points: 11.20, rebounds: 8.44, assists: 2.66, steals: 1.0, turnovers: 1.7, fouls: 2.2, salary: 1200000, quality: 'A-', offense: 70, defense: 75, image: 'images/brendan.jpg' },
                { name: 'Can Özcan', position: 'SF', team: 'Final Spor', age: 33, points: 7.63, rebounds: 3.37, assists: 0.68, steals: 0.7, turnovers: 1.2, fouls: 1.6, salary: 900000, quality: 'C+', offense: 55, defense: 52, image: 'images/can.jpg' },
                { name: 'Deshon Davion Taylor', position: 'SG', team: 'Final Spor', age: 26, points: 19.67, rebounds: 4.03, assists: 0.44, steals: 1.5, turnovers: 2.1, fouls: 2.3, salary: 1500000, quality: 'S-', offense: 85, defense: 80, image: 'images/deshon.jpg' },
                { name: 'Egemen Usta', position: 'SF', team: 'Final Spor', age: 19, points: 0.90, rebounds: 0.70, assists: 0.20, steals: 0.1, turnovers: 0.3, fouls: 0.7, salary: 600000, quality: 'D-', offense: 22, defense: 25, image: 'images/egemen.jpg' },
                { name: 'Hidayet Civan', position: 'C', team: 'Final Spor', age: 24, points: 1.52, rebounds: 1.84, assists: 0.74, steals: 0.2, turnovers: 0.5, fouls: 1.0, salary: 800000, quality: 'D-', offense: 28, defense: 32, image: 'images/hidayet.jpg' },
                { name: 'Kerem Aydan Özel', position: 'PG', team: 'Final Spor', age: 24, points: 8.90, rebounds: 1.78, assists: 0.20, steals: 0.8, turnovers: 1.3, fouls: 1.7, salary: 1000000, quality: 'B-', offense: 60, defense: 55, image: 'images/kerem.jpg' },
                { name: 'Mustafa Baştürk', position: 'SG', team: 'Final Spor', age: 26, points: 8.97, rebounds: 2.09, assists: 0.46, steals: 0.8, turnovers: 1.3, fouls: 1.7, salary: 1100000, quality: 'B-', offense: 62, defense: 58, image: 'images/mustafa.jpg' },
                { name: 'Ozan Yılmaz', position: 'PG', team: 'Final Spor', age: 19, points: 4.03, rebounds: 2.45, assists: 0.92, steals: 0.4, turnovers: 0.8, fouls: 1.2, salary: 700000, quality: 'C-', offense: 38, defense: 40, image: 'images/ozan.jpg' },
                { name: 'Recep Doğrusöz', position: 'SF', team: 'Final Spor', age: 36, points: 6.63, rebounds: 2.15, assists: 0.29, steals: 0.6, turnovers: 1.0, fouls: 1.4, salary: 900000, quality: 'C', offense: 48, defense: 45, image: 'images/recep.jpg' },
                { name: 'Talat Alp Altunbey', position: 'C', team: 'Final Spor', age: 28, points: 6.12, rebounds: 3.63, assists: 1.15, steals: 0.6, turnovers: 1.1, fouls: 1.6, salary: 1200000, quality: 'C', offense: 45, defense: 48, image: 'images/talat.jpg' },
                { name: 'Yunus Emre Hamatoğlu', position: 'PF', team: 'Final Spor', age: 19, points: 5.00, rebounds: 6.00, assists: 0.00, steals: 0.5, turnovers: 0.9, fouls: 1.4, salary: 600000, quality: 'C', offense: 42, defense: 45, image: 'images/yunus.jpg' },
         
            ]
        },
        {
            name: 'GAZİANTEP BASKETBOL',
            players: [
                { name: 'Arda Birkeser', position: 'SG', team: 'Gaziantep', age: 19, points: 1.20, rebounds: 1.00, assists: 0.40, steals: 0.1, turnovers: 0.3, fouls: 0.7, salary: 900000, quality: 'D-', offense: 25, defense: 28, image: 'images/arda.jpg' },
                { name: 'Dusan Cantekin', position: 'C', team: 'Gaziantep', age: 31, points: 9.92, rebounds: 5.69, assists: 3.50, steals: 0.9, turnovers: 1.5, fouls: 2.0, salary: 1400000, quality: 'B-', offense: 65, defense: 68, image: 'images/dusan.jpg' },
                { name: 'Efe Sarica', position: 'SF', team: 'Gaziantep', age: 21, points: 3.04, rebounds: 1.70, assists: 1.22, steals: 0.3, turnovers: 0.7, fouls: 1.1, salary: 1100000, quality: 'D+', offense: 35, defense: 38, image: 'images/efe_s.jpg' },
                { name: 'Emir Arda Sivas', position: 'PG', team: 'Gaziantep', age: 19, points: 5.58, rebounds: 1.83, assists: 1.42, steals: 0.5, turnovers: 1.0, fouls: 1.4, salary: 1200000, quality: 'C+', offense: 48, defense: 45, image: 'images/emir_s.jpg' },
                { name: 'Emirali Göktürk', position: 'C', team: 'Gaziantep', age: 20, points: 2.05, rebounds: 1.48, assists: 0.90, steals: 0.2, turnovers: 0.5, fouls: 1.0, salary: 900000, quality: 'D-', offense: 30, defense: 32, image: 'images/emirali.jpg' },
                { name: 'Erkin Şenel', position: 'SF', team: 'Gaziantep', age: 25, points: 13.73, rebounds: 4.97, assists: 4.12, steals: 1.2, turnovers: 1.8, fouls: 2.1, salary: 1500000, quality: 'A-', offense: 75, defense: 72, image: 'images/erkin.jpg' },
                { name: 'Hasan Emir Gökalp', position: 'PG', team: 'Gaziantep', age: 29, points: 2.94, rebounds: 1.25, assists: 1.00, steals: 0.3, turnovers: 0.6, fouls: 1.0, salary: 1100000, quality: 'D+', offense: 32, defense: 35, image: 'images/hasan.jpg' },
                { name: 'Hüseyin Emre Yılmaz', position: 'SF', team: 'Gaziantep', age: 22, points: 0.80, rebounds: 0.95, assists: 0.75, steals: 0.1, turnovers: 0.3, fouls: 0.7, salary: 900000, quality: 'D-', offense: 22, defense: 25, image: 'images/huseyin.jpg' },
                { name: 'İbrahim Ethem Yılmaz', position: 'PF', team: 'Gaziantep', age: 20, points: 4.07, rebounds: 0.83, assists: 0.68, steals: 0.4, turnovers: 0.8, fouls: 1.2, salary: 1100000, quality: 'D+', offense: 38, defense: 35, image: 'images/ibrahim_e.jpg' },
                { name: 'Koray Çekici', position: 'PF', team: 'Gaziantep', age: 22, points: 12.20, rebounds: 7.28, assists: 4.68, steals: 1.1, turnovers: 1.7, fouls: 2.0, salary: 1400000, quality: 'A-', offense: 72, defense: 70, image: 'images/koray_ç.jpg' },
                { name: 'Maurice Jerome Charles Watson Jr', position: 'PG', team: 'Gaziantep', age: 31, points: 17.68, rebounds: 3.51, assists: 2.98, steals: 1.5, turnovers: 2.1, fouls: 2.3, salary: 1600000, quality: 'S-', offense: 85, defense: 80, image: 'images/maurice.jpg' },
                { name: 'Rolands Freimanis', position: 'PF', team: 'Gaziantep', age: 35, points: 14.64, rebounds: 6.23, assists: 4.59, steals: 1.2, turnovers: 1.8, fouls: 2.1, salary: 1500000, quality: 'A-', offense: 78, defense: 75, image: 'images/rolands.jpg' },
                { name: 'Turan Altunbaş', position: 'SG', team: 'Gaziantep', age: 18, points: 0.92, rebounds: 0.25, assists: 0.17, steals: 0.1, turnovers: 0.3, fouls: 0.6, salary: 900000, quality: 'D-', offense: 22, defense: 25, image: 'images/turan.jpg' },
                { name: 'Ufuk Tan Ertan', position: 'SF', team: 'Gaziantep', age: 20, points: 1.75, rebounds: 0.56, assists: 0.44, steals: 0.2, turnovers: 0.4, fouls: 0.8, salary: 900000, quality: 'D-', offense: 25, defense: 28, image: 'images/ufuk.jpg' },
                { name: 'Yiğit Onan', position: 'PF', team: 'Gaziantep', age: 21, points: 14.93, rebounds: 8.36, assists: 6.04, steals: 1.3, turnovers: 1.9, fouls: 2.2, salary: 1400000, quality: 'A', offense: 80, defense: 78, image: 'images/yigit_o.jpg' },
         
            ]
        },
        {
            name: 'GÖLBAŞI BELEDİYESİ TED ANKARA KOLEJLİLER',
            players: [
                { name: 'Atakan Akçam', position: 'PG', team: 'Gölbaşı Ted', age: 27, points: 2.12, rebounds: 1.24, assists: 0.79, steals: 0.3, turnovers: 0.6, fouls: 1.1, salary: 1200000, quality: 'D+', offense: 35, defense: 38, image: 'images/atakan.jpg' },
                { name: 'Bartu Aslan Çilengeroğlu', position: 'SG', team: 'Gölbaşı Ted', age: 18, points: 0.80, rebounds: 0.60, assists: 0.20, steals: 0.1, turnovers: 0.3, fouls: 0.5, salary: 900000, quality: 'D-', offense: 25, defense: 28, image: 'images/bartu.jpg' },
                { name: 'Cengizhan İvedi', position: 'SF', team: 'Gölbaşı Ted', age: 24, points: 6.71, rebounds: 3.82, assists: 2.68, steals: 0.8, turnovers: 1.3, fouls: 1.8, salary: 1300000, quality: 'C+', offense: 55, defense: 52, image: 'images/cengizhan.jpg' },
                { name: 'Cevher Özer', position: 'PF', team: 'Gölbaşı Ted', age: 40, points: 3.33, rebounds: 3.20, assists: 2.67, steals: 0.5, turnovers: 1.0, fouls: 1.7, salary: 1400000, quality: 'D+', offense: 42, defense: 45, image: 'images/cevher.jpg' },
                { name: 'Doğukan Sönmez', position: 'PF', team: 'Gölbaşı Ted', age: 31, points: 5.22, rebounds: 3.19, assists: 1.85, steals: 0.6, turnovers: 1.1, fouls: 1.8, salary: 1300000, quality: 'C', offense: 48, defense: 50, image: 'images/dogukan_s.jpg' },
                { name: 'Ege Berk Cangal', position: 'SG', team: 'Gölbaşı Ted', age: 20, points: 0.63, rebounds: 0.13, assists: 0.00, steals: 0.1, turnovers: 0.2, fouls: 0.4, salary: 900000, quality: 'D-', offense: 22, defense: 25, image: 'images/ege.jpg' },
                { name: 'Ekrem Sancaklı', position: 'SG', team: 'Gölbaşı Ted', age: 22, points: 7.53, rebounds: 2.00, assists: 1.67, steals: 0.8, turnovers: 1.3, fouls: 1.6, salary: 1400000, quality: 'C+', offense: 58, defense: 55, image: 'images/ekrem.jpg' },
                { name: 'Furkan Ayça', position: 'PG', team: 'Gölbaşı Ted', age: 24, points: 6.11, rebounds: 1.86, assists: 1.28, steals: 0.7, turnovers: 1.2, fouls: 1.5, salary: 1300000, quality: 'C+', offense: 52, defense: 50, image: 'images/furkan.jpg' },
                { name: 'Hazer Avci', position: 'PF', team: 'Gölbaşı Ted', age: 36, points: 13.42, rebounds: 4.84, assists: 4.26, steals: 1.2, turnovers: 1.9, fouls: 2.3, salary: 1400000, quality: 'A', offense: 75, defense: 72, image: 'images/hazer.jpg' },
                { name: 'Julien Dimitri Ducree', position: 'PF', team: 'Gölbaşı Ted', age: 26, points: 15.11, rebounds: 7.81, assists: 4.96, steals: 1.3, turnovers: 2.0, fouls: 2.4, salary: 1500000, quality: 'A', offense: 78, defense: 75, image: 'images/julien.jpg' },
                { name: 'Karan Şahin', position: 'SG', team: 'Gölbaşı Ted', age: 16, points: 0.00, rebounds: 0.00, assists: 0.00, steals: 0.0, turnovers: 0.0, fouls: 0.0, salary: 900000, quality: 'D-', offense: 20, defense: 22, image: 'images/karan.jpg' },
                { name: 'Michael Soloman Smith', position: 'SF', team: 'Gölbaşı Ted', age: 26, points: 15.33, rebounds: 2.67, assists: 2.00, steals: 1.4, turnovers: 2.1, fouls: 2.2, salary: 1500000, quality: 'A-', offense: 80, defense: 75, image: 'images/michael.jpg' },
                { name: 'Ömer Can Engin', position: 'SF', team: 'Gölbaşı Ted', age: 25, points: 2.74, rebounds: 1.74, assists: 1.39, steals: 0.4, turnovers: 0.8, fouls: 1.3, salary: 1300000, quality: 'D+', offense: 38, defense: 40, image: 'images/omercan.jpg' },
                { name: 'Sedat Ali Karagülle', position: 'SG', team: 'Gölbaşı Ted', age: 24, points: 8.26, rebounds: 2.96, assists: 2.22, steals: 0.9, turnovers: 1.4, fouls: 1.8, salary: 1400000, quality: 'B-', offense: 60, defense: 58, image: 'images/sedat.jpg' },
                { name: 'Teyvon Taffarie Myers', position: 'PG', team: 'Gölbaşı Ted', age: 28, points: 18.59, rebounds: 4.09, assists: 3.56, steals: 1.6, turnovers: 2.3, fouls: 2.1, salary: 1600000, quality: 'S-', offense: 85, defense: 80, image: 'images/teyvon.jpg' },
            ]
        },
        {
            name: 'KAPAKLISPOR',
            players: [
                { name: 'Alperen Demir', position: 'PF', team: 'Kapaklı Spor', age: 23, points: 4.80, rebounds: 2.00, assists: 1.13, steals: 0.5, turnovers: 0.9, fouls: 1.4, salary: 1200000, quality: 'D+', offense: 42, defense: 45, image: 'images/alperen.jpg' },
                { name: 'Baha Korkmaz', position: 'SG', team: 'Kapaklı Spor', age: 19, points: 1.20, rebounds: 2.00, assists: 1.20, steals: 0.2, turnovers: 0.5, fouls: 0.8, salary: 900000, quality: 'D-', offense: 28, defense: 32, image: 'images/baha.jpg' },
                { name: 'Cem Han', position: 'PF', team: 'Kapaklı Spor', age: 28, points: 10.64, rebounds: 5.73, assists: 4.21, steals: 1.1, turnovers: 1.7, fouls: 2.2, salary: 1400000, quality: 'B+', offense: 68, defense: 65, image: 'images/cem.jpg' },
                { name: 'Emir Bozyiğit', position: 'PG', team: 'Kapaklı Spor', age: 22, points: 1.00, rebounds: 0.47, assists: 0.47, steals: 0.2, turnovers: 0.4, fouls: 0.7, salary: 900000, quality: 'D-', offense: 25, defense: 28, image: 'images/emir.jpg' },
                { name: 'Harun Can Doğan', position: 'SG', team: 'Kapaklı Spor', age: 27, points: 9.00, rebounds: 2.52, assists: 2.12, steals: 0.9, turnovers: 1.4, fouls: 1.8, salary: 1300000, quality: 'B-', offense: 62, defense: 58, image: 'images/harun.jpg' },
                { name: 'İbrahim Ahmet Pınarer', position: 'SF', team: 'Kapaklı Spor', age: 25, points: 5.32, rebounds: 2.38, assists: 1.32, steals: 0.6, turnovers: 1.0, fouls: 1.5, salary: 1200000, quality: 'C', offense: 48, defense: 45, image: 'images/ibrahim_a.jpg' },
                { name: 'Kaan Yıldırımkanlı', position: 'SG', team: 'Kapaklı Spor', age: 22, points: 2.65, rebounds: 1.12, assists: 0.94, steals: 0.4, turnovers: 0.7, fouls: 1.2, salary: 1000000, quality: 'D+', offense: 35, defense: 38, image: 'images/kaan.jpg' },
                { name: 'Kemal Can Aktuna', position: 'SG', team: 'Kapaklı Spor', age: 28, points: 15.67, rebounds: 3.50, assists: 3.00, steals: 1.4, turnovers: 2.1, fouls: 2.2, salary: 1500000, quality: 'A-', offense: 78, defense: 72, image: 'images/kemal.jpg' },
                { name: 'Kristijan Nikolov', position: 'PG', team: 'Kapaklı Spor', age: 26, points: 12.47, rebounds: 2.40, assists: 1.87, steals: 1.2, turnovers: 1.8, fouls: 2.0, salary: 1400000, quality: 'A-', offense: 72, defense: 68, image: 'images/kristijan.jpg' },
                { name: 'Marvin Hilton Jefferson', position: 'C', team: 'Kapaklı Spor', age: 37, points: 11.35, rebounds: 9.81, assists: 6.32, steals: 1.2, turnovers: 2.0, fouls: 2.5, salary: 1600000, quality: 'A', offense: 75, defense: 78, image: 'images/marvin.jpg' },
                { name: 'Serkan Özver', position: 'PF', team: 'Kapaklı Spor', age: 33, points: 7.29, rebounds: 5.38, assists: 3.09, steals: 0.8, turnovers: 1.4, fouls: 2.1, salary: 1300000, quality: 'B-', offense: 58, defense: 60, image: 'images/serkan_ü.jpg' },
                { name: 'Troy Chissell Franklin Jr', position: 'PG', team: 'Kapaklı Spor', age: 34, points: 21.90, rebounds: 3.55, assists: 2.87, steals: 1.8, turnovers: 2.4, fouls: 2.2, salary: 1700000, quality: 'S+', offense: 88, defense: 82, image: 'images/troy.jpg' },
                { name: 'Utku Pelit', position: 'SG', team: 'Kapaklı Spor', age: 19, points: 4.28, rebounds: 1.44, assists: 1.16, steals: 0.5, turnovers: 0.8, fouls: 1.2, salary: 900000, quality: 'C-', offense: 42, defense: 40, image: 'images/utku.jpg' },
            
            ]
        },
    
        {
            name: 'KOCAELİ KAĞIT SPOR',
            players: [
                { name: 'Barboros Bozkurt', position: 'C', team: 'Kocaeli Kağıt', age: 35, points: 4.07, rebounds: 3.11, assists: 2.50, steals: 0.5, turnovers: 1.0, fouls: 1.8, salary: 1200000, quality: 'D+', offense: 42, defense: 45, image: 'images/barboros.jpg' },
                { name: 'Beray Taşer', position: 'SG', team: 'Kocaeli Kağıt', age: 20, points: 0.43, rebounds: 0.14, assists: 0.14, steals: 0.1, turnovers: 0.2, fouls: 0.4, salary: 900000, quality: 'D-', offense: 22, defense: 25, image: 'images/beray.jpg' },
                { name: 'Berke Baran Akçam', position: 'PG', team: 'Kocaeli Kağıt', age: 23, points: 1.35, rebounds: 0.70, assists: 0.43, steals: 0.2, turnovers: 0.4, fouls: 0.7, salary: 900000, quality: 'D-', offense: 28, defense: 30, image: 'images/berke.jpg' },
                { name: 'Elber Mirza Sucu', position: 'PF', team: 'Kocaeli Kağıt', age: 19, points: 0.50, rebounds: 1.00, assists: 1.00, steals: 0.1, turnovers: 0.3, fouls: 0.6, salary: 900000, quality: 'D-', offense: 25, defense: 28, image: 'images/elber.jpg' },
                { name: 'Eren Beyaz', position: 'PF', team: 'Kocaeli Kağıt', age: 38, points: 7.83, rebounds: 3.62, assists: 2.86, steals: 0.8, turnovers: 1.3, fouls: 2.0, salary: 1300000, quality: 'B-', offense: 58, defense: 55, image: 'images/eren_b.jpg' },
                { name: 'Hakan Şanlı', position: 'SG', team: 'Kocaeli Kağıt', age: 26, points: 3.81, rebounds: 2.06, assists: 1.28, steals: 0.5, turnovers: 0.8, fouls: 1.3, salary: 1100000, quality: 'C-', offense: 42, defense: 40, image: 'images/hakan_ş.jpg' },
                { name: 'İbrahim Yıldırım', position: 'PG', team: 'Kocaeli Kağıt', age: 33, points: 10.50, rebounds: 4.33, assists: 3.67, steals: 1.1, turnovers: 1.7, fouls: 2.1, salary: 1400000, quality: 'B', offense: 65, defense: 62, image: 'images/ibrahim.jpg' },
                { name: 'Ja Cori Artimus Coselle Payne', position: 'PG', team: 'Kocaeli Kağıt', age: 27, points: 20.62, rebounds: 2.68, assists: 2.24, steals: 1.7, turnovers: 2.3, fouls: 2.1, salary: 1600000, quality: 'S-', offense: 85, defense: 78, image: 'images/jacori.jpg' },
                { name: 'Keith Martin Stone', position: 'PF', team: 'Kocaeli Kağıt', age: 26, points: 16.32, rebounds: 8.71, assists: 6.29, steals: 1.4, turnovers: 2.1, fouls: 2.5, salary: 1500000, quality: 'A-', offense: 78, defense: 75, image: 'images/keith.jpg' },
                { name: 'Kevin Kaspar', position: 'PG', team: 'Kocaeli Kağıt', age: 31, points: 8.16, rebounds: 4.56, assists: 3.78, steals: 0.9, turnovers: 1.5, fouls: 1.9, salary: 1300000, quality: 'B-', offense: 60, defense: 58, image: 'images/kevin.jpg' },
                { name: 'Melih Can Kızılkaya', position: 'SG', team: 'Kocaeli Kağıt', age: 19, points: 0.00, rebounds: 0.00, assists: 0.00, steals: 0.0, turnovers: 0.0, fouls: 0.0, salary: 900000, quality: 'D-', offense: 20, defense: 22, image: 'images/melih.jpg' },
                { name: 'Mert Ulutaş', position: 'SF', team: 'Kocaeli Kağıt', age: 26, points: 10.97, rebounds: 3.10, assists: 2.19, steals: 1.0, turnovers: 1.6, fouls: 1.8, salary: 1400000, quality: 'B', offense: 65, defense: 62, image: 'images/mert_u.jpg' },
                { name: 'Mete Tekçevik', position: 'SF', team: 'Kocaeli Kağıt', age: 22, points: 2.05, rebounds: 0.82, assists: 0.68, steals: 0.3, turnovers: 0.6, fouls: 1.0, salary: 1000000, quality: 'D-', offense: 32, defense: 35, image: 'images/mete.jpg' },
                { name: 'Sertan İbrahim Sarı', position: 'PF', team: 'Kocaeli Kağıt', age: 28, points: 5.38, rebounds: 2.79, assists: 1.91, steals: 0.6, turnovers: 1.1, fouls: 1.6, salary: 1200000, quality: 'C-', offense: 45, defense: 48, image: 'images/sertan.jpg' },
                { name: 'Tolga Kayra Arıt', position: 'PG', team: 'Kocaeli Kağıt', age: 19, points: 2.00, rebounds: 0.00, assists: 0.00, steals: 0.2, turnovers: 0.4, fouls: 0.6, salary: 900000, quality: 'D-', offense: 25, defense: 28, image: 'images/tolga.jpg' },
            
            ]
        },
        {
            name: 'KONYASPOR',
            players: [
                { name: 'Adem Bayrak', position: 'SF', team: 'KonyaSpor', age: 23, points: 3.68, rebounds: 1.61, assists: 0.96, steals: 0.4, turnovers: 0.8, fouls: 1.2, salary: 1000000, quality: 'D+', offense: 38, defense: 40, image: 'images/adem.jpg' },
                { name: 'Arda Erdoğan', position: 'PG', team: 'KonyaSpor', age: 24, points: 1.96, rebounds: 1.09, assists: 0.91, steals: 0.3, turnovers: 0.5, fouls: 0.9, salary: 900000, quality: 'D-', offense: 32, defense: 35, image: 'images/arda.jpg' },
                { name: 'Batuhan Acar', position: 'SG', team: 'KonyaSpor', age: 21, points: 5.16, rebounds: 2.35, assists: 1.35, steals: 0.6, turnovers: 1.0, fouls: 1.4, salary: 1100000, quality: 'C+', offense: 48, defense: 45, image: 'images/batuhan.jpg' },
                { name: 'Doruk Dora', position: 'SG', team: 'KonyaSpor', age: 24, points: 4.00, rebounds: 0.67, assists: 0.53, steals: 0.4, turnovers: 0.7, fouls: 1.1, salary: 1000000, quality: 'D+', offense: 35, defense: 38, image: 'images/doruk.jpg' },
                { name: 'Mert Çevik', position: 'SG', team: 'KonyaSpor', age: 27, points: 8.28, rebounds: 4.41, assists: 4.03, steals: 0.9, turnovers: 1.5, fouls: 1.9, salary: 1200000, quality: 'B-', offense: 62, defense: 60, image: 'images/mert_ç.jpg' },
                { name: 'Mert Ali Sert', position: 'PF', team: 'KonyaSpor', age: 27, points: 8.53, rebounds: 4.40, assists: 3.20, steals: 0.8, turnovers: 1.4, fouls: 2.0, salary: 1200000, quality: 'B-', offense: 60, defense: 58, image: 'images/mertali.jpg' },
                { name: 'Merthan Mutlu', position: 'PG', team: 'KonyaSpor', age: 29, points: 14.00, rebounds: 3.73, assists: 3.24, steals: 1.3, turnovers: 1.9, fouls: 2.1, salary: 1300000, quality: 'A-', offense: 75, defense: 70, image: 'images/merthan.jpg' },
                { name: 'Muhammed Emin Kütük', position: 'SG', team: 'KonyaSpor', age: 19, points: 0.00, rebounds: 0.00, assists: 0.00, steals: 0.0, turnovers: 0.0, fouls: 0.0, salary: 900000, quality: 'D-', offense: 20, defense: 22, image: 'images/muhammed.jpg' },
                { name: 'Murat Atar', position: 'PF', team: 'KonyaSpor', age: 26, points: 3.06, rebounds: 2.26, assists: 1.23, steals: 0.4, turnovers: 0.8, fouls: 1.3, salary: 1000000, quality: 'D+', offense: 35, defense: 38, image: 'images/murat_at.jpg' },
                { name: 'Myles Anthony Mack', position: 'PG', team: 'KonyaSpor', age: 31, points: 21.50, rebounds: 3.88, assists: 3.00, steals: 1.8, turnovers: 2.4, fouls: 2.2, salary: 1600000, quality: 'S+', offense: 88, defense: 82, image: 'images/myles.jpg' },
                { name: 'Ömer Yavaş', position: 'PF', team: 'KonyaSpor', age: 22, points: 2.86, rebounds: 1.43, assists: 1.07, steals: 0.3, turnovers: 0.6, fouls: 1.1, salary: 900000, quality: 'D+', offense: 32, defense: 35, image: 'images/omer_yv.jpg' },
                { name: 'Said Emre Yosmaoğlu', position: 'SG', team: 'KonyaSpor', age: 20, points: 1.75, rebounds: 1.00, assists: 0.83, steals: 0.2, turnovers: 0.4, fouls: 0.8, salary: 900000, quality: 'D-', offense: 28, defense: 30, image: 'images/said.jpg' },
                { name: 'Uğur Can Aksoy', position: 'PF', team: 'KonyaSpor', age: 32, points: 3.29, rebounds: 2.41, assists: 1.44, steals: 0.4, turnovers: 0.8, fouls: 1.4, salary: 1000000, quality: 'D+', offense: 38, defense: 40, image: 'images/ugur.jpg' },
            
            
            ]
        },
        {
            name: 'MERSİN BÜYÜKŞEHİR BELEDİYE',
            players: [
                { name: 'Ata Turgut', position: 'PG', team: 'Mersin Büyükşehir', age: 24, points: 1.38, rebounds: 1.54, assists: 1.15, steals: 0.2, turnovers: 0.4, fouls: 0.8, salary: 900000, quality: 'D-', offense: 28, defense: 30, image: 'images/ata.jpg' },
                { name: 'Berat Berke Tunç', position: 'PF', team: 'Mersin Büyükşehir', age: 19, points: 0.64, rebounds: 0.82, assists: 0.36, steals: 0.1, turnovers: 0.3, fouls: 0.5, salary: 850000, quality: 'D-', offense: 22, defense: 25, image: 'images/berat.jpg' },
                { name: 'Berkay Sinirlioğlu', position: 'PG', team: 'Mersin Büyükşehir', age: 29, points: 9.93, rebounds: 3.36, assists: 2.75, steals: 1.0, turnovers: 1.6, fouls: 1.9, salary: 1200000, quality: 'B-', offense: 62, defense: 60, image: 'images/berkay_si.jpg' },
                { name: 'Burak Gözeneli', position: 'PG', team: 'Mersin Büyükşehir', age: 23, points: 6.11, rebounds: 1.05, assists: 0.92, steals: 0.6, turnovers: 1.0, fouls: 1.3, salary: 950000, quality: 'C-', offense: 45, defense: 42, image: 'images/burak_go.jpg' },
                { name: 'Canberk Kuş', position: 'SF', team: 'Mersin Büyükşehir', age: 27, points: 9.45, rebounds: 4.62, assists: 3.31, steals: 0.9, turnovers: 1.5, fouls: 2.0, salary: 1250000, quality: 'B', offense: 65, defense: 62, image: 'images/canberk.jpg' },
                { name: 'Deniz Çelen', position: 'PF', team: 'Mersin Büyükşehir', age: 26, points: 5.37, rebounds: 3.15, assists: 2.29, steals: 0.6, turnovers: 1.1, fouls: 1.6, salary: 1000000, quality: 'C', offense: 48, defense: 45, image: 'images/deniz.jpg' },
                { name: 'Evaldas Kairys', position: 'PF', team: 'Mersin Büyükşehir', age: 33, points: 9.41, rebounds: 5.36, assists: 3.68, steals: 0.9, turnovers: 1.6, fouls: 2.2, salary: 1350000, quality: 'B-', offense: 62, defense: 65, image: 'images/evaldas.jpg' },
                { name: 'Gerel David Simmons', position: 'PG', team: 'Mersin Büyükşehir', age: 30, points: 19.03, rebounds: 3.41, assists: 2.32, steals: 1.6, turnovers: 2.2, fouls: 2.0, salary: 1500000, quality: 'S-', offense: 82, defense: 75, image: 'images/gerel.jpg' },
                { name: 'Gökhan Yazıcıoğlu', position: 'PF', team: 'Mersin Büyükşehir', age: 33, points: 8.51, rebounds: 6.28, assists: 4.56, steals: 0.8, turnovers: 1.5, fouls: 2.1, salary: 1200000, quality: 'B-', offense: 60, defense: 62, image: 'images/gokhan.jpg' },
                { name: 'Hüseyin Akın Kandemir', position: 'SG', team: 'Mersin Büyükşehir', age: 28, points: 9.66, rebounds: 2.20, assists: 1.97, steals: 0.9, turnovers: 1.4, fouls: 1.8, salary: 1100000, quality: 'B-', offense: 62, defense: 58, image: 'images/huseyin.jpg' },
                { name: 'Murat Meriç Kuntker', position: 'SG', team: 'Mersin Büyükşehir', age: 21, points: 5.91, rebounds: 1.55, assists: 1.09, steals: 0.5, turnovers: 0.9, fouls: 1.2, salary: 900000, quality: 'C-', offense: 42, defense: 40, image: 'images/murat.jpg' },
                { name: 'Oleksandr Mishula', position: 'PG', team: 'Mersin Büyükşehir', age: 31, points: 6.00, rebounds: 0.50, assists: 0.50, steals: 0.5, turnovers: 0.8, fouls: 1.1, salary: 900000, quality: 'C-', offense: 45, defense: 42, image: 'images/oleksandr.jpg' },
                { name: 'Ramazan Tekin', position: 'C', team: 'Mersin Büyükşehir', age: 30, points: 3.29, rebounds: 2.88, assists: 1.95, steals: 0.4, turnovers: 0.8, fouls: 1.5, salary: 1000000, quality: 'C-', offense: 38, defense: 42, image: 'images/ramazan.jpg' },
                { name: 'Turgut Doğukan Seyhan', position: 'SG', team: 'Mersin Büyükşehir', age: 17, points: 0.00, rebounds: 0.00, assists: 0.00, steals: 0.0, turnovers: 0.0, fouls: 0.0, salary: 850000, quality: 'D-', offense: 20, defense: 22, image: 'images/turgut.jpg' },
                { name: 'Yiğitcan Turna', position: 'PG', team: 'Mersin Büyükşehir', age: 36, points: 3.48, rebounds: 1.66, assists: 1.28, steals: 0.4, turnovers: 0.7, fouls: 1.2, salary: 950000, quality: 'D+', offense: 38, defense: 35, image: 'images/yigitcan.jpg' },
            
            ]
        },
        {
            name: 'MKE ANKARAGÜCÜ İKON MENKUL',
            players: [
                { name: 'Alican Güney', position: 'SG', team: 'Ankaragücü', age: 35, points: 5.66, rebounds: 1.79, assists: 1.31, steals: 0.5, turnovers: 0.9, fouls: 1.3, salary: 950000, quality: 'C-', offense: 45, defense: 42, image: 'images/alican.jpg' },
                { name: 'Baran Yurduşen', position: 'PF', team: 'Ankaragücü', age: 20, points: 3.45, rebounds: 2.05, assists: 1.35, steals: 0.4, turnovers: 0.7, fouls: 1.2, salary: 900000, quality: 'D+', offense: 35, defense: 38, image: 'images/baran.jpg' },
                { name: 'Burak Selen', position: 'PF', team: 'Ankaragücü', age: 35, points: 6.18, rebounds: 2.86, assists: 2.09, steals: 0.6, turnovers: 1.1, fouls: 1.7, salary: 1000000, quality: 'B-', offense: 52, defense: 50, image: 'images/burak.jpg' },
                { name: 'Can Urşan', position: 'PG', team: 'Ankaragücü', age: 24, points: 5.55, rebounds: 1.55, assists: 1.29, steals: 0.5, turnovers: 0.9, fouls: 1.2, salary: 850000, quality: 'C-', offense: 42, defense: 40, image: 'images/can.jpg' },
                { name: 'Caner Ercan', position: 'C', team: 'Ankaragücü', age: 37, points: 4.74, rebounds: 1.95, assists: 1.47, steals: 0.4, turnovers: 0.8, fouls: 1.5, salary: 1050000, quality: 'C-', offense: 40, defense: 42, image: 'images/caner.jpg' },
                { name: 'Efe Beşok', position: 'PF', team: 'Ankaragücü', age: 27, points: 1.44, rebounds: 0.56, assists: 0.33, steals: 0.2, turnovers: 0.4, fouls: 0.8, salary: 800000, quality: 'D-', offense: 25, defense: 28, image: 'images/efe.jpg' },
                { name: 'Hakan Yapar', position: 'PF', team: 'Ankaragücü', age: 39, points: 18.42, rebounds: 6.21, assists: 4.89, steals: 1.5, turnovers: 2.2, fouls: 2.4, salary: 1200000, quality: 'A', offense: 82, defense: 78, image: 'images/hakan.jpg' },
                { name: 'İlhan Barış Gökalp', position: 'SF', team: 'Ankaragücü', age: 33, points: 3.05, rebounds: 1.53, assists: 1.16, steals: 0.3, turnovers: 0.6, fouls: 1.1, salary: 850000, quality: 'D+', offense: 32, defense: 35, image: 'images/ilhan.jpg' },
                { name: 'İsmet Baran Avşar', position: 'PG', team: 'Ankaragücü', age: 24, points: 4.47, rebounds: 1.71, assists: 1.41, steals: 0.4, turnovers: 0.8, fouls: 1.2, salary: 900000, quality: 'D+', offense: 38, defense: 40, image: 'images/ismet.jpg' },
                { name: 'Kyan Shakeel Anderson', position: 'SG', team: 'Ankaragücü', age: 32, points: 21.41, rebounds: 2.50, assists: 2.24, steals: 1.8, turnovers: 2.4, fouls: 2.1, salary: 1500000, quality: 'S-', offense: 85, defense: 80, image: 'images/kyan.jpg' },
                { name: 'Mevlüt Melih Doğan', position: 'SF', team: 'Ankaragücü', age: 20, points: 2.20, rebounds: 2.20, assists: 1.30, steals: 0.3, turnovers: 0.5, fouls: 0.9, salary: 850000, quality: 'D-', offense: 30, defense: 32, image: 'images/mevlut.jpg' },
                { name: 'Mithat Can Özalp', position: 'PG', team: 'Ankaragücü', age: 22, points: 4.46, rebounds: 1.42, assists: 0.83, steals: 0.4, turnovers: 0.7, fouls: 1.1, salary: 900000, quality: 'D+', offense: 35, defense: 38, image: 'images/mithat.jpg' },
                { name: 'Oderah Anosike', position: 'C', team: 'Ankaragücü', age: 33, points: 11.87, rebounds: 13.80, assists: 10.20, steals: 1.2, turnovers: 2.0, fouls: 2.5, salary: 1300000, quality: 'A-', offense: 75, defense: 78, image: 'images/oderah.jpg' },
                { name: 'Oğulcan Baykan', position: 'SF', team: 'Ankaragücü', age: 27, points: 6.21, rebounds: 3.36, assists: 2.86, steals: 0.6, turnovers: 1.1, fouls: 1.6, salary: 950000, quality: 'B-', offense: 54, defense: 48, image: 'images/ogulcan.jpg' },
                { name: 'Soner Şentürk', position: 'PG', team: 'Ankaragücü', age: 37, points: 6.22, rebounds: 3.61, assists: 2.56, steals: 0.6, turnovers: 1.2, fouls: 1.7, salary: 1050000, quality: 'C-', offense: 45, defense: 42, image: 'images/soner.jpg' },
            
            
            ]
        },
        {
            name: 'OGM ORMANSPOR',
            players: [
                { name: 'Bilgehan Diril', position: 'PG', team: 'Orman Spor', age: 23, points: 9.17, rebounds: 2.08, assists: 1.58, steals: 0.8, turnovers: 1.3, fouls: 1.6, salary: 950000, quality: 'C+', offense: 58, defense: 55, image: 'images/bilgehan.jpg' },
                { name: 'Cevat Alper Özcan', position: 'PG', team: 'Orman Spor', age: 34, points: 6.35, rebounds: 2.18, assists: 1.71, steals: 0.6, turnovers: 1.0, fouls: 1.4, salary: 900000, quality: 'C-', offense: 45, defense: 42, image: 'images/cevat.jpg' },
                { name: 'Eric Buckner', position: 'C', team: 'Orman Spor', age: 34, points: 14.81, rebounds: 9.62, assists: 6.73, steals: 1.3, turnovers: 2.1, fouls: 2.4, salary: 1200000, quality: 'A-', offense: 78, defense: 75, image: 'images/eric.jpg' },
                { name: 'Göktürk Gökalp Ural', position: 'SG', team: 'Orman Spor', age: 29, points: 9.15, rebounds: 4.09, assists: 2.68, steals: 0.8, turnovers: 1.4, fouls: 1.8, salary: 950000, quality: 'C+', offense: 58, defense: 55, image: 'images/gokturk.jpg' },
                { name: 'Görkem Fırat Güneri', position: 'SF', team: 'Orman Spor', age: 22, points: 2.78, rebounds: 1.33, assists: 1.11, steals: 0.3, turnovers: 0.6, fouls: 1.0, salary: 850000, quality: 'D-', offense: 32, defense: 35, image: 'images/gorkem.jpg' },
                { name: 'Mehmet Yakar', position: 'PG', team: 'Orman Spor', age: 21, points: 0.69, rebounds: 0.50, assists: 0.19, steals: 0.1, turnovers: 0.3, fouls: 0.5, salary: 800000, quality: 'D-', offense: 22, defense: 25, image: 'images/mehmet.jpg' },
                { name: 'Mertcan Solkol', position: 'SF', team: 'Orman Spor', age: 28, points: 7.57, rebounds: 2.53, assists: 2.03, steals: 0.7, turnovers: 1.2, fouls: 1.6, salary: 900000, quality: 'C-', offense: 52, defense: 50, image: 'images/mertcan.jpg' },
                { name: 'Oğuzhan Tosun', position: 'PG', team: 'Orman Spor', age: 27, points: 7.45, rebounds: 2.24, assists: 1.69, steals: 0.7, turnovers: 1.2, fouls: 1.5, salary: 850000, quality: 'C-', offense: 50, defense: 48, image: 'images/oguzhan.jpg' },
                { name: 'Osman Gökhan Şirin', position: 'PF', team: 'Orman Spor', age: 33, points: 5.42, rebounds: 3.26, assists: 2.65, steals: 0.5, turnovers: 1.0, fouls: 1.7, salary: 1000000, quality: 'C-', offense: 45, defense: 48, image: 'images/osman.jpg' },
                { name: 'Saadettin Donat', position: 'PF', team: 'Orman Spor', age: 23, points: 3.21, rebounds: 1.57, assists: 0.64, steals: 0.3, turnovers: 0.6, fouls: 1.1, salary: 800000, quality: 'D-', offense: 32, defense: 35, image: 'images/saadettin.jpg' },
                { name: 'Servet Alperen Kurnaz', position: 'SF', team: 'Orman Spor', age: 25, points: 8.41, rebounds: 5.12, assists: 3.71, steals: 0.8, turnovers: 1.4, fouls: 1.9, salary: 950000, quality: 'B-', offense: 60, defense: 58, image: 'images/servet.jpg' },
                { name: 'Yavuz Koça', position: 'C', team: 'Orman Spor', age: 24, points: 2.40, rebounds: 2.50, assists: 1.87, steals: 0.3, turnovers: 0.7, fouls: 1.3, salary: 900000, quality: 'D-', offense: 32, defense: 35, image: 'images/yavuz.jpg' },
            
            
            ]
        },
        {
            name: 'PİZZA LAZZA HAREMSPOR',
            players: [
                { name: 'Ali Işık', position: 'PF', team: 'Harem Spor', age: 34, points: 9.58, rebounds: 5.21, assists: 3.88, steals: 0.9, turnovers: 1.5, fouls: 2.0, salary: 1000000, quality: 'B-', offense: 62, defense: 60, image: 'images/ali.jpg' },
                { name: 'Bertan Baştan', position: 'SG', team: 'Harem Spor', age: 26, points: 3.70, rebounds: 2.09, assists: 1.43, steals: 0.4, turnovers: 0.8, fouls: 1.2, salary: 850000, quality: 'D+', offense: 35, defense: 38, image: 'images/bertan.jpg' },
                { name: 'Birkan Batuk', position: 'SG', team: 'Harem Spor', age: 34, points: 6.60, rebounds: 3.00, assists: 2.10, steals: 0.6, turnovers: 1.1, fouls: 1.5, salary: 950000, quality: 'C-', offense: 48, defense: 45, image: 'images/birkan.jpg' },
                { name: 'Brandon Karl Huffman', position: 'C', team: 'Harem Spor', age: 26, points: 12.70, rebounds: 9.70, assists: 7.00, steals: 1.2, turnovers: 2.0, fouls: 2.3, salary: 1200000, quality: 'A', offense: 75, defense: 78, image: 'images/brandon_hu.jpg' },
                { name: 'Buğra Ertaş', position: 'PG', team: 'Harem Spor', age: 20, points: 0.86, rebounds: 0.00, assists: 0.00, steals: 0.1, turnovers: 0.3, fouls: 0.4, salary: 800000, quality: 'D-', offense: 20, defense: 22, image: 'images/bugra.jpg' },
                { name: 'Ege Eskinazi', position: 'SG', team: 'Harem Spor', age: 21, points: 6.10, rebounds: 1.94, assists: 1.35, steals: 0.5, turnovers: 0.9, fouls: 1.3, salary: 850000, quality: 'C-', offense: 45, defense: 42, image: 'images/ege_es.jpg' },
                { name: 'Emre Can Akdümbek', position: 'SF', team: 'Harem Spor', age: 21, points: 1.60, rebounds: 1.70, assists: 1.20, steals: 0.2, turnovers: 0.5, fouls: 0.9, salary: 800000, quality: 'D-', offense: 25, defense: 28, image: 'images/emre.jpg' },
                { name: 'Gökhan Karabıyık', position: 'C', team: 'Harem Spor', age: 36, points: 2.50, rebounds: 1.11, assists: 1.00, steals: 0.3, turnovers: 0.6, fouls: 1.2, salary: 950000, quality: 'D-', offense: 30, defense: 32, image: 'images/gokhan_k.jpg' },
                { name: 'Gökhan Aydın', position: 'SF', team: 'Harem Spor', age: 28, points: 7.69, rebounds: 2.25, assists: 1.50, steals: 0.7, turnovers: 1.2, fouls: 1.6, salary: 900000, quality: 'C-', offense: 52, defense: 50, image: 'images/gokhan_a.jpg' },
                { name: 'İnanç Mert Hotamış', position: 'PF', team: 'Harem Spor', age: 22, points: 7.56, rebounds: 3.75, assists: 2.25, steals: 0.7, turnovers: 1.3, fouls: 1.7, salary: 850000, quality: 'C+', offense: 55, defense: 52, image: 'images/inanc.jpg' },
                { name: 'Koralp Türk', position: 'PF', team: 'Harem Spor', age: 21, points: 3.48, rebounds: 2.59, assists: 1.86, steals: 0.4, turnovers: 0.8, fouls: 1.3, salary: 800000, quality: 'D+', offense: 35, defense: 38, image: 'images/koralp.jpg' },
                { name: 'Osiris Eldridge', position: 'SG', team: 'Harem Spor', age: 36, points: 15.79, rebounds: 6.90, assists: 5.97, steals: 1.4, turnovers: 2.1, fouls: 2.2, salary: 1200000, quality: 'A-', offense: 80, defense: 75, image: 'images/osiris.jpg' },
                { name: 'Ömer Yasir Küçük', position: 'PG', team: 'Harem Spor', age: 23, points: 14.31, rebounds: 4.25, assists: 3.81, steals: 1.3, turnovers: 1.9, fouls: 2.0, salary: 950000, quality: 'A-', offense: 75, defense: 72, image: 'images/omeryasır.jpg' },
                { name: 'Tuğberk Gedikli', position: 'PG', team: 'Harem Spor', age: 33, points: 7.57, rebounds: 2.70, assists: 2.17, steals: 0.7, turnovers: 1.2, fouls: 1.6, salary: 900000, quality: 'C', offense: 52, defense: 50, image: 'images/tugberk.jpg' },
                
        
            ]
        },
        {
            name: 'SEMT77 YALOVASPOR',
            players: [
                { name: 'Ali Efe Barış', position: 'PG', team: 'Yalova Spor', age: 23, points: 7.91, rebounds: 3.45, assists: 2.76, steals: 0.7, turnovers: 1.3, fouls: 1.7, salary: 900000, quality: 'B-', offense: 55, defense: 52, image: 'images/ali_efe.jpg' },
                { name: 'Andrew Michael Harrison', position: 'PG', team: 'Yalova Spor', age: 29, points: 13.91, rebounds: 3.27, assists: 3.00, steals: 1.2, turnovers: 1.8, fouls: 2.1, salary: 1100000, quality: 'A-', offense: 75, defense: 72, image: 'images/andrew.jpg' },
                { name: 'Berkay Kansu', position: 'SF', team: 'Yalova Spor', age: 27, points: 1.40, rebounds: 1.00, assists: 1.00, steals: 0.2, turnovers: 0.4, fouls: 0.8, salary: 800000, quality: 'D-', offense: 25, defense: 28, image: 'images/kansu.jpg' },
                { name: 'Brandon Cortez Walters', position: 'PF', team: 'Yalova Spor', age: 29, points: 19.85, rebounds: 8.76, assists: 6.03, steals: 1.6, turnovers: 2.3, fouls: 2.5, salary: 1200000, quality: 'S+', offense: 85, defense: 82, image: 'images/brandon.jpg' },
                { name: 'Ege Özçelik', position: 'PF', team: 'Yalova Spor', age: 21, points: 4.13, rebounds: 1.33, assists: 0.92, steals: 0.4, turnovers: 0.7, fouls: 1.1, salary: 850000, quality: 'D+', offense: 35, defense: 38, image: 'images/ege.jpg' },
                { name: 'Eren Özen', position: 'SF', team: 'Yalova Spor', age: 21, points: 1.75, rebounds: 1.50, assists: 0.50, steals: 0.2, turnovers: 0.4, fouls: 0.8, salary: 800000, quality: 'D-', offense: 25, defense: 28, image: 'images/eren.jpg' },
                { name: 'İzzet Türkyılmaz', position: 'PF', team: 'Yalova Spor', age: 34, points: 3.25, rebounds: 4.31, assists: 3.50, steals: 0.4, turnovers: 0.9, fouls: 1.5, salary: 950000, quality: 'C-', offense: 42, defense: 45, image: 'images/izzet.jpg' },
                { name: 'Kadir Bayram', position: 'PG', team: 'Yalova Spor', age: 28, points: 13.03, rebounds: 3.09, assists: 2.74, steals: 1.1, turnovers: 1.7, fouls: 2.0, salary: 1100000, quality: 'A-', offense: 72, defense: 70, image: 'images/kadir.jpg' },
                { name: 'Mehmet Fırat Alemdaroğlu', position: 'C', team: 'Yalova Spor', age: 28, points: 3.78, rebounds: 2.78, assists: 1.34, steals: 0.4, turnovers: 0.8, fouls: 1.4, salary: 900000, quality: 'C-', offense: 38, defense: 40, image: 'images/mehmetal.jpg' },
                { name: 'Melih Kapucu', position: 'PF', team: 'Yalova Spor', age: 34, points: 4.27, rebounds: 2.53, assists: 2.00, steals: 0.4, turnovers: 0.9, fouls: 1.4, salary: 900000, quality: 'C-', offense: 40, defense: 42, image: 'images/melih.jpg' },
                { name: 'Mert Gizir', position: 'SG', team: 'Yalova Spor', age: 29, points: 4.70, rebounds: 1.53, assists: 1.33, steals: 0.5, turnovers: 0.8, fouls: 1.2, salary: 850000, quality: 'C-', offense: 42, defense: 40, image: 'images/mert.jpg' },
                { name: 'Orhan Aydın Haciyeva', position: 'PF', team: 'Yalova Spor', age: 34, points: 8.06, rebounds: 7.21, assists: 5.35, steals: 0.8, turnovers: 1.5, fouls: 2.0, salary: 1000000, quality: 'B-', offense: 58, defense: 60, image: 'images/orhan.jpg' },
                { name: 'Ömer Sancaklı', position: 'SG', team: 'Yalova Spor', age: 32, points: 6.73, rebounds: 1.88, assists: 1.61, steals: 0.6, turnovers: 1.0, fouls: 1.4, salary: 900000, quality: 'C-', offense: 45, defense: 42, image: 'images/omer.jpg' },
                { name: 'Ricky Lafredrick Tarrant Jr', position: 'PG', team: 'Yalova Spor', age: 31, points: 14.48, rebounds: 3.38, assists: 2.76, steals: 1.3, turnovers: 1.9, fouls: 2.1, salary: 1100000, quality: 'A-', offense: 78, defense: 75, image: 'images/ricky.jpg' },
                { name: 'Sercan Topcu', position: 'SF', team: 'Yalova Spor', age: 39, points: 3.42, rebounds: 0.89, assists: 0.74, steals: 0.3, turnovers: 0.6, fouls: 1.0, salary: 850000, quality: 'D+', offense: 32, defense: 35, image: 'images/sercan.jpg' },
            
        
            ]
        },
        {
            name: 'SİGORTAM NET',
            players: [
               
                { name: 'Abdoulaye Gueye', position: 'PF', team: 'Sigortam Net', age: 29, points: 11.07, rebounds: 6.67, assists: 4.49, steals: 1.0, turnovers: 1.7, fouls: 2.1, salary: 1100000, quality: 'B', offense: 65, defense: 68, image: 'images/abdoulaye.jpg' },
        { name: 'Berkay Bayar', position: 'SF', team: 'Sigortam Net', age: 24, points: 5.96, rebounds: 3.96, assists: 2.80, steals: 0.6, turnovers: 1.1, fouls: 1.5, salary: 900000, quality: 'C', offense: 48, defense: 50, image: 'images/berkay.jpg' },
        { name: 'Cihat Mertali Dalgali', position: 'PF', team: 'Sigortam Net', age: 23, points: 4.41, rebounds: 3.17, assists: 2.20, steals: 0.4, turnovers: 0.9, fouls: 1.4, salary: 850000, quality: 'C-', offense: 42, defense: 45, image: 'images/cihat.jpg' },
        { name: 'Doğukan Şanlı', position: 'SG', team: 'Sigortam Net', age: 28, points: 8.00, rebounds: 1.56, assists: 1.25, steals: 0.7, turnovers: 1.2, fouls: 1.5, salary: 950000, quality: 'C+', offense: 55, defense: 52, image: 'images/dogukan.jpg' },
        { name: 'Emir Adıgüzel', position: 'PG', team: 'Sigortam Net', age: 21, points: 3.36, rebounds: 1.69, assists: 1.21, steals: 0.3, turnovers: 0.7, fouls: 1.1, salary: 800000, quality: 'C-', offense: 35, defense: 38, image: 'images/emir.jpg' },
        { name: 'Erdem İlter', position: 'PG', team: 'Sigortam Net', age: 34, points: 8.77, rebounds: 2.98, assists: 2.68, steals: 0.8, turnovers: 1.3, fouls: 1.7, salary: 950000, quality: 'C+', offense: 58, defense: 55, image: 'images/erdem.jpg' },
        { name: 'James Brian Florence', position: 'PG', team: 'Sigortam Net', age: 39, points: 15.31, rebounds: 1.60, assists: 1.26, steals: 1.3, turnovers: 1.8, fouls: 1.9, salary: 1200000, quality: 'A-', offense: 75, defense: 70, image: 'images/james.jpg' },
        { name: 'Kerem Kuthan Konan', position: 'PF', team: 'Sigortam Net', age: 19, points: 0.00, rebounds: 0.00, assists: 0.00, steals: 0.0, turnovers: 0.2, fouls: 0.3, salary: 750000, quality: 'D-', offense: 20, defense: 22, image: 'images/kerem.jpg' },
        { name: 'Keshun Deion Sherrill', position: 'PG', team: 'Sigortam Net', age: 30, points: 17.60, rebounds: 2.70, assists: 2.20, steals: 1.4, turnovers: 2.0, fouls: 2.1, salary: 1100000, quality: 'A-', offense: 80, defense: 75, image: 'images/keshun.jpg' },
        { name: 'Koray Uzunhasan', position: 'PF', team: 'Sigortam Net', age: 32, points: 2.79, rebounds: 2.00, assists: 1.38, steals: 0.3, turnovers: 0.6, fouls: 1.2, salary: 850000, quality: 'C-', offense: 32, defense: 35, image: 'images/koray.jpg' },
        { name: 'Mehmet Özdoğan', position: 'SF', team: 'Sigortam Net', age: 37, points: 2.81, rebounds: 0.65, assists: 0.46, steals: 0.3, turnovers: 0.5, fouls: 0.8, salary: 800000, quality: 'D-', offense: 28, defense: 30, image: 'images/mehmet.jpg' },
        { name: 'Muhammet Engin Kalkan', position: 'PF', team: 'Sigortam Net', age: 24, points: 6.64, rebounds: 3.14, assists: 2.36, steals: 0.6, turnovers: 1.1, fouls: 1.6, salary: 900000, quality: 'C-', offense: 45, defense: 48, image: 'images/muhammet.jpg' },
        { name: 'Samet Yiğitoğlu', position: 'C', team: 'Sigortam Net', age: 20, points: 10.00, rebounds: 7.25, assists: 4.75, steals: 0.9, turnovers: 1.6, fouls: 2.0, salary: 950000, quality: 'B-', offense: 62, defense: 65, image: 'images/samet.jpg' },
        { name: 'Serkan Menteşe', position: 'PG', team: 'Sigortam Net', age: 33, points: 7.16, rebounds: 3.20, assists: 2.38, steals: 0.7, turnovers: 1.2, fouls: 1.6, salary: 850000, quality: 'C', offense: 50, defense: 48, image: 'images/serkan.jpg' },
        { name: 'Yiğit Baran Sarıkaya', position: 'PF', team: 'Sigortam Net', age: 25, points: 8.93, rebounds: 4.75, assists: 3.30, steals: 0.8, turnovers: 1.4, fouls: 1.8, salary: 900000, quality: 'B-', offense: 58, defense: 55, image: 'images/ybs.jpg' },
            
            
        
            ]
        },
        {
            name: 'ALAGÖZ HOLDİNG IĞDIR',
            players: [
               
                { name: 'Benoit Mbala', position: 'PF', team: 'Alagöz Iğdır', age: 25, points: 17.26, rebounds: 6.87, assists: 2.06, steals: 1.2, turnovers: 2.4, fouls: 2.8, salary: 1500000, quality: 'S-', offense: 82, defense: 78, image: 'images/mbala.jpg' },
                { name: 'Berk Çavdar', position: 'PG', team: 'Alagöz Iğdır', age: 25, points: 2.67, rebounds: 0.67, assists: 0.67, steals: 0.4, turnovers: 0.9, fouls: 1.2, salary: 800000, quality: 'D+', offense: 42, defense: 45, image: 'images/berk.jpg' },
                { name: 'Burak Erol', position: 'SG', team: 'Alagöz Iğdır', age: 32, points: 8.75, rebounds: 4.11, assists: 1.32, steals: 0.8, turnovers: 1.5, fouls: 2.1, salary: 1200000, quality: 'B-', offense: 52, defense: 54, image: 'images/burak.jpg' },
                { name: 'Burak Türsen', position: 'PF', team: 'Alagöz Iğdır', age: 21, points: 2.43, rebounds: 2.48, assists: 0.91, steals: 0.5, turnovers: 1.1, fouls: 1.8, salary: 900000, quality: 'D+', offense: 40, defense: 48, image: 'images/buraktur.jpg' },
                { name: 'Cem Coşkun', position: 'C', team: 'Alagöz Iğdır', age: 34, points: 4.00, rebounds: 3.42, assists: 1.06, steals: 0.6, turnovers: 1.2, fouls: 2.4, salary: 1100000, quality: 'C-', offense: 45, defense: 52, image: 'images/cem.jpg' },
                { name: 'Hasan Efe Uzun', position: 'PG', team: 'Alagöz Iğdır', age: 19, points: 0.50, rebounds: 0.75, assists: 0.00, steals: 0.2, turnovers: 0.5, fouls: 0.8, salary: 700000, quality: 'D-', offense: 35, defense: 40, image: 'images/hasan.jpg' },
                { name: 'Marlain Guy Veal', position: 'PG', team: 'Alagöz Iğdır', age: 26, points: 22.71, rebounds: 5.80, assists: 4.43, steals: 1.8, turnovers: 2.9, fouls: 2.5, salary: 2000000, quality: 'S+', offense: 92, defense: 85, image: 'images/marlain.jpg' },
                { name: 'Muhammet Ali Güneş', position: 'SG', team: 'Alagöz Iğdır', age: 19, points: 0.67, rebounds: 1.22, assists: 0.33, steals: 0.3, turnovers: 0.6, fouls: 0.9, salary: 600000, quality: 'D-', offense: 38, defense: 42, image: 'images/muhammet.jpg' },
                { name: 'Murat Kozan', position: 'PF', team: 'Alagöz Iğdır', age: 28, points: 5.61, rebounds: 3.06, assists: 0.61, steals: 0.7, turnovers: 1.3, fouls: 2.0, salary: 1300000, quality: 'C', offense: 48, defense: 52, image: 'images/murat.jpg' },
                { name: 'Murat Can Esen', position: 'SF', team: 'Alagöz Iğdır', age: 32, points: 4.33, rebounds: 1.44, assists: 0.26, steals: 0.4, turnovers: 1.0, fouls: 1.7, salary: 1200000, quality: 'C-', offense: 45, defense: 48, image: 'images/muratcan.jpg' },
                { name: 'Ömer Kaan Göğüş', position: 'PF', team: 'Alagöz Iğdır', age: 33, points: 2.63, rebounds: 2.26, assists: 0.48, steals: 0.5, turnovers: 1.1, fouls: 1.9, salary: 1000000, quality: 'D+', offense: 42, defense: 45, image: 'images/omerg.jpg' },
                { name: 'Önder Atun', position: 'SG', team: 'Alagöz Iğdır', age: 21, points: 5.86, rebounds: 2.92, assists: 1.42, steals: 0.8, turnovers: 1.4, fouls: 2.1, salary: 900000, quality: 'B-', offense: 60, defense: 68, image: 'images/onder.jpg' },
                { name: 'Özgür Şahin', position: 'SG', team: 'Alagöz Iğdır', age: 29, points: 6.40, rebounds: 2.20, assists: 0.37, steals: 0.6, turnovers: 1.2, fouls: 1.8, salary: 1100000, quality: 'C', offense: 48, defense: 50, image: 'images/ozgur.jpg' },
                { name: 'Robert Ridjell Upshaw III', position: 'C', team: 'Alagöz Iğdır', age: 30, points: 20.83, rebounds: 9.50, assists: 2.83, steals: 1.6, turnovers: 2.7, fouls: 2.9, salary: 2000000, quality: 'S', offense: 88, defense: 85, image: 'images/robert.jpg' },
                { name: 'Suat Cem Usal', position: 'PG', team: 'Alagöz Iğdır', age: 29, points: 1.44, rebounds: 1.06, assists: 0.47, steals: 0.3, turnovers: 0.8, fouls: 1.2, salary: 700000, quality: 'D-', offense: 38, defense: 42, image: 'images/suat.jpg' },
                { name: 'Şahin Muzaffer Ekemen', position: 'SF', team: 'Alagöz Iğdır', age: 32, points: 6.73, rebounds: 3.82, assists: 0.64, steals: 0.7, turnovers: 1.3, fouls: 2.0, salary: 1200000, quality: 'C+', offense: 52, defense: 55, image: 'images/sahin.jpg' },
            
            
        
            ]
        },
    
        {
            name: 'Golden State Warriors',
            players: [
                { name: 'Stephen Curry', position: 'PG', team: 'Golden State Warriors', age: 26, points: 23.8, rebounds: 4.3, assists: 7.7, steals: 2.0, turnovers: 3.1, fouls: 2.0, salary: 10900000, quality: 'X', offense: 205, defense: 185, image: 'images/curry.jpg' },
                { name: 'Klay Thompson', position: 'SG', team: 'Golden State Warriors', age: 24, points: 21.7, rebounds: 3.2, assists: 2.9, steals: 1.1, turnovers: 1.9, fouls: 2.0, salary: 3075880, quality: 'X', offense: 200, defense: 188, image: 'images/thompson.jpg' },
                { name: 'Harrison Barnes', position: 'SF', team: 'Golden State Warriors', age: 22, points: 10.1, rebounds: 5.5, assists: 1.4, steals: 0.7, turnovers: 1.1, fouls: 1.9, salary: 3049920, quality: 'X', offense: 182, defense: 180, image: 'images/barnes.jpg' },
                { name: 'Draymond Green', position: 'PF', team: 'Golden State Warriors', age: 24, points: 11.7, rebounds: 8.2, assists: 3.7, steals: 1.6, turnovers: 1.7, fouls: 3.2, salary: 915243, quality: 'X', offense: 182, defense: 192, image: 'images/green.jpg' },
                { name: 'Andrew Bogut', position: 'C', team: 'Golden State Warriors', age: 30, points: 6.3, rebounds: 8.1, assists: 2.7, steals: 0.6, turnovers: 1.8, fouls: 3.1, salary: 12972973, quality: 'X', offense: 175, defense: 188, image: 'images/bogut.jpg' },
                { name: 'Andre Iguodala', position: 'SF', team: 'Golden State Warriors', age: 31, points: 9.0, rebounds: 4.7, assists: 3.7, steals: 1.2, turnovers: 1.5, fouls: 1.7, salary: 12289544, quality: 'X', offense: 180, defense: 185, image: 'images/iguodala.jpg' },
                { name: 'Shaun Livingston', position: 'PG', team: 'Golden State Warriors', age: 29, points: 6.3, rebounds: 2.3, assists: 3.0, steals: 0.6, turnovers: 1.0, fouls: 1.9, salary: 5305000, quality: 'X', offense: 175, defense: 178, image: 'images/livingston.jpg' }
            ]
        },
        {
            name: 'Cleveland Cavaliers',
            players: [
                { name: 'Kyrie Irving', position: 'PG', team: 'Cleveland Cavaliers', age: 22, points: 21.7, rebounds: 3.2, assists: 5.2, steals: 1.5, turnovers: 2.5, fouls: 2.3, salary: 7070730, quality: 'X', offense: 202, defense: 184, image: 'images/irving.jpg' },
                { name: 'J.R. Smith', position: 'SG', team: 'Cleveland Cavaliers', age: 29, points: 12.7, rebounds: 3.5, assists: 2.5, steals: 1.4, turnovers: 1.3, fouls: 2.1, salary: 5982375, quality: 'X', offense: 185, defense: 180, image: 'images/smith.jpg' },
                { name: 'LeBron James', position: 'SF', team: 'Cleveland Cavaliers', age: 30, points: 25.3, rebounds: 6.0, assists: 7.4, steals: 1.6, turnovers: 3.9, fouls: 2.0, salary: 20644400, quality: 'X', offense: 215, defense: 192, image: 'images/lebron.jpg' },
                { name: 'Kevin Love', position: 'PF', team: 'Cleveland Cavaliers', age: 26, points: 16.4, rebounds: 9.7, assists: 2.2, steals: 0.7, turnovers: 1.9, fouls: 1.9, salary: 15719063, quality: 'X', offense: 188, defense: 185, image: 'images/love.jpg' },
                { name: 'Timofey Mozgov', position: 'C', team: 'Cleveland Cavaliers', age: 28, points: 9.7, rebounds: 7.3, assists: 0.9, steals: 0.4, turnovers: 1.2, fouls: 2.7, salary: 4650000, quality: 'X', offense: 178, defense: 182, image: 'images/mozgov.jpg' },
                { name: 'Tristan Thompson', position: 'PF', team: 'Cleveland Cavaliers', age: 23, points: 8.5, rebounds: 8.0, assists: 0.5, steals: 0.4, turnovers: 0.9, fouls: 2.3, salary: 5138430, quality: 'X', offense: 175, defense: 185, image: 'images/thompson.jpg' },
                { name: 'Matthew Dellavedova', position: 'PG', team: 'Cleveland Cavaliers', age: 24, points: 4.8, rebounds: 1.9, assists: 3.0, steals: 0.5, turnovers: 1.1, fouls: 1.9, salary: 816482, quality: 'X', offense: 172, defense: 175, image: 'images/dellavedova.jpg' }
            ]
        },
        {
            name: 'Houston Rockets',
            players: [
                { name: 'James Harden', position: 'SG', team: 'Houston Rockets', age: 25, points: 27.4, rebounds: 5.7, assists: 7.0, steals: 1.9, turnovers: 4.0, fouls: 2.6, salary: 14728844, quality: 'X', offense: 215, defense: 185, image: 'images/harden.jpg' },
                { name: 'Patrick Beverley', position: 'PG', team: 'Houston Rockets', age: 26, points: 10.1, rebounds: 4.2, assists: 3.4, steals: 1.1, turnovers: 1.4, fouls: 2.8, salary: 915243, quality: 'X', offense: 178, defense: 185, image: 'images/beverley.jpg' },
                { name: 'Trevor Ariza', position: 'SF', team: 'Houston Rockets', age: 29, points: 12.8, rebounds: 5.6, assists: 2.5, steals: 1.9, turnovers: 1.4, fouls: 2.1, salary: 8579088, quality: 'X', offense: 180, defense: 184, image: 'images/ariza.jpg' },
                { name: 'Donatas Motiejunas', position: 'PF', team: 'Houston Rockets', age: 24, points: 12.0, rebounds: 5.9, assists: 1.8, steals: 0.5, turnovers: 1.7, fouls: 2.8, salary: 1483920, quality: 'X', offense: 182, defense: 180, image: 'images/motiejunas.jpg' },
                { name: 'Dwight Howard', position: 'C', team: 'Houston Rockets', age: 29, points: 15.8, rebounds: 10.5, assists: 1.2, steals: 0.7, turnovers: 2.3, fouls: 3.0, salary: 21436271, quality: 'X', offense: 185, defense: 190, image: 'images/howard.jpg' },
                { name: 'Corey Brewer', position: 'SF', team: 'Houston Rockets', age: 28, points: 11.9, rebounds: 3.6, assists: 1.7, steals: 1.1, turnovers: 1.3, fouls: 2.1, salary: 4702500, quality: 'X', offense: 178, defense: 180, image: 'images/brewer.jpg' },
                { name: 'Josh Smith', position: 'PF', team: 'Houston Rockets', age: 29, points: 12.4, rebounds: 6.4, assists: 3.3, steals: 1.4, turnovers: 2.4, fouls: 3.0, salary: 2077000, quality: 'X', offense: 180, defense: 182, image: 'images/smith.jpg' },
                { name: 'Jason Terry', position: 'SG', team: 'Houston Rockets', age: 37, points: 7.0, rebounds: 1.6, assists: 1.9, steals: 0.9, turnovers: 0.8, fouls: 1.5, salary: 1448490, quality: 'X', offense: 175, defense: 172, image: 'images/terry.jpg' },
                { name: 'Pablo Prigioni', position: 'PG', team: 'Houston Rockets', age: 37, points: 3.0, rebounds: 1.7, assists: 2.8, steals: 1.0, turnovers: 0.7, fouls: 1.4, salary: 1662961, quality: 'X', offense: 170, defense: 172, image: 'images/prigioni.jpg' }
            ]
        },
        {
            name: 'Atlanta Hawks',
            players: [
                { name: 'Jeff Teague', position: 'PG', team: 'Atlanta Hawks', age: 26, points: 15.9, rebounds: 2.5, assists: 7.0, steals: 1.7, turnovers: 2.8, fouls: 2.1, salary: 8000000, quality: 'X', offense: 185, defense: 182, image: 'images/teague.jpg' },
                { name: 'Kyle Korver', position: 'SG', team: 'Atlanta Hawks', age: 33, points: 12.1, rebounds: 4.1, assists: 2.6, steals: 0.7, turnovers: 1.3, fouls: 1.9, salary: 6253521, quality: 'X', offense: 185, defense: 178, image: 'images/korver.jpg' },
                { name: 'DeMarre Carroll', position: 'SF', team: 'Atlanta Hawks', age: 28, points: 12.6, rebounds: 5.3, assists: 1.7, steals: 1.3, turnovers: 1.1, fouls: 2.4, salary: 2442455, quality: 'X', offense: 180, defense: 185, image: 'images/carroll.jpg' },
                { name: 'Paul Millsap', position: 'PF', team: 'Atlanta Hawks', age: 29, points: 16.7, rebounds: 7.8, assists: 3.1, steals: 1.8, turnovers: 2.2, fouls: 2.8, salary: 9500000, quality: 'X', offense: 188, defense: 185, image: 'images/millsap.jpg' },
                { name: 'Al Horford', position: 'C', team: 'Atlanta Hawks', age: 28, points: 15.2, rebounds: 7.2, assists: 3.2, steals: 0.9, turnovers: 1.7, fouls: 2.0, salary: 12000000, quality: 'X', offense: 185, defense: 188, image: 'images/horford.jpg' },
                { name: 'Dennis Schroder', position: 'PG', team: 'Atlanta Hawks', age: 21, points: 10.0, rebounds: 2.1, assists: 4.1, steals: 0.6, turnovers: 2.3, fouls: 2.1, salary: 1690680, quality: 'X', offense: 180, defense: 178, image: 'images/schroder.jpg' },
                { name: 'Mike Scott', position: 'PF', team: 'Atlanta Hawks', age: 26, points: 7.8, rebounds: 2.9, assists: 1.1, steals: 0.4, turnovers: 0.9, fouls: 1.8, salary: 3333333, quality: 'X', offense: 175, defense: 175, image: 'images/scott.jpg' }
            ]
        },
        {
            name: 'Los Angeles Clippers',
            players: [
                { name: 'Chris Paul', position: 'PG', team: 'Los Angeles Clippers', age: 29, points: 19.1, rebounds: 4.6, assists: 10.2, steals: 1.9, turnovers: 2.3, fouls: 2.5, salary: 20068563, quality: 'X', offense: 202, defense: 190, image: 'images/paul.jpg' },
                { name: 'J.J. Redick', position: 'SG', team: 'Los Angeles Clippers', age: 30, points: 16.4, rebounds: 2.1, assists: 1.8, steals: 0.5, turnovers: 1.2, fouls: 2.0, salary: 6792500, quality: 'X', offense: 185, defense: 178, image: 'images/redick.jpg' },
                { name: 'Matt Barnes', position: 'SF', team: 'Los Angeles Clippers', age: 34, points: 10.1, rebounds: 4.0, assists: 1.5, steals: 0.9, turnovers: 1.0, fouls: 2.4, salary: 3396250, quality: 'X', offense: 175, defense: 180, image: 'images/barnes.jpg' },
                { name: 'Blake Griffin', position: 'PF', team: 'Los Angeles Clippers', age: 25, points: 21.9, rebounds: 7.6, assists: 5.3, steals: 0.9, turnovers: 2.3, fouls: 3.2, salary: 17674613, quality: 'X', offense: 200, defense: 185, image: 'images/griffin.jpg' },
                { name: 'DeAndre Jordan', position: 'C', team: 'Los Angeles Clippers', age: 26, points: 11.5, rebounds: 15.0, assists: 0.7, steals: 0.6, turnovers: 1.3, fouls: 2.8, salary: 11440000, quality: 'X', offense: 182, defense: 192, image: 'images/jordan.jpg' },
                { name: 'Jamal Crawford', position: 'SG', team: 'Los Angeles Clippers', age: 34, points: 15.8, rebounds: 1.9, assists: 2.5, steals: 0.9, turnovers: 1.7, fouls: 1.5, salary: 5450000, quality: 'X', offense: 185, defense: 175, image: 'images/crawford.jpg' },
                { name: 'Spencer Hawes', position: 'C', team: 'Los Angeles Clippers', age: 26, points: 5.8, rebounds: 3.5, assists: 1.2, steals: 0.3, turnovers: 0.9, fouls: 2.2, salary: 5305000, quality: 'X', offense: 175, defense: 178, image: 'images/hawes.jpg' },
                { name: 'Austin Rivers', position: 'PG', team: 'Los Angeles Clippers', age: 22, points: 7.1, rebounds: 2.0, assists: 1.7, steals: 0.6, turnovers: 1.1, fouls: 1.8, salary: 2439840, quality: 'X', offense: 172, defense: 175, image: 'images/rivers.jpg' },
                { name: 'Glen Davis', position: 'PF', team: 'Los Angeles Clippers', age: 29, points: 4.0, rebounds: 2.3, assists: 0.7, steals: 0.4, turnovers: 0.7, fouls: 1.7, salary: 1227985, quality: 'X', offense: 170, defense: 175, image: 'images/davis.jpg' }
            ]
        },
        {
            name: 'San Antonio Spurs',
            players: [
                { name: 'Tony Parker', position: 'PG', team: 'San Antonio Spurs', age: 32, points: 14.4, rebounds: 1.9, assists: 4.9, steals: 0.6, turnovers: 2.2, fouls: 1.3, salary: 12500000, quality: 'X', offense: 185, defense: 180, image: 'images/parker.jpg' },
                { name: 'Danny Green', position: 'SG', team: 'San Antonio Spurs', age: 27, points: 11.7, rebounds: 4.2, assists: 2.0, steals: 1.2, turnovers: 1.1, fouls: 2.0, salary: 4025000, quality: 'X', offense: 182, defense: 185, image: 'images/green.jpg' },
                { name: 'Kawhi Leonard', position: 'SF', team: 'San Antonio Spurs', age: 23, points: 16.5, rebounds: 7.2, assists: 2.5, steals: 2.3, turnovers: 1.5, fouls: 1.8, salary: 2894059, quality: 'X', offense: 188, defense: 192, image: 'images/leonard.jpg' },
                { name: 'Tim Duncan', position: 'PF', team: 'San Antonio Spurs', age: 38, points: 13.9, rebounds: 9.1, assists: 3.0, steals: 0.8, turnovers: 1.6, fouls: 1.9, salary: 10361446, quality: 'X', offense: 185, defense: 188, image: 'images/duncan.jpg' },
                { name: 'Tiago Splitter', position: 'C', team: 'San Antonio Spurs', age: 30, points: 8.2, rebounds: 4.8, assists: 1.5, steals: 0.5, turnovers: 1.1, fouls: 2.1, salary: 9250000, quality: 'X', offense: 175, defense: 182, image: 'images/splitter.jpg' },
                { name: 'Manu Ginobili', position: 'SG', team: 'San Antonio Spurs', age: 37, points: 10.5, rebounds: 3.0, assists: 4.2, steals: 1.0, turnovers: 2.0, fouls: 1.8, salary: 7000000, quality: 'X', offense: 182, defense: 178, image: 'images/ginobili.jpg' },
                { name: 'Boris Diaw', position: 'PF', team: 'San Antonio Spurs', age: 32, points: 8.7, rebounds: 4.3, assists: 2.9, steals: 0.5, turnovers: 1.3, fouls: 1.7, salary: 7500000, quality: 'X', offense: 178, defense: 180, image: 'images/diaw.jpg' },
                { name: 'Patty Mills', position: 'PG', team: 'San Antonio Spurs', age: 26, points: 6.9, rebounds: 1.5, assists: 1.7, steals: 0.6, turnovers: 0.9, fouls: 1.1, salary: 3578947, quality: 'X', offense: 175, defense: 175, image: 'images/mills.jpg' },
                { name: 'Marco Belinelli', position: 'SG', team: 'San Antonio Spurs', age: 28, points: 9.2, rebounds: 2.5, assists: 1.5, steals: 0.4, turnovers: 0.9, fouls: 1.2, salary: 2873750, quality: 'X', offense: 178, defense: 172, image: 'images/belinelli.jpg' }
            ]
        },
        {
            name: 'Portland Trail Blazers',
            players: [
                { name: 'Damian Lillard', position: 'PG', team: 'Portland Trail Blazers', age: 24, points: 21.0, rebounds: 4.6, assists: 6.2, steals: 1.2, turnovers: 2.7, fouls: 2.0, salary: 4236287, quality: 'X', offense: 200, defense: 182, image: 'images/lillard.jpg' },
                { name: 'Wesley Matthews', position: 'SG', team: 'Portland Trail Blazers', age: 28, points: 15.9, rebounds: 3.7, assists: 2.3, steals: 1.3, turnovers: 1.4, fouls: 2.3, salary: 7245640, quality: 'X', offense: 185, defense: 184, image: 'images/matthews.jpg' },
                { name: 'Nicolas Batum', position: 'SF', team: 'Portland Trail Blazers', age: 26, points: 9.4, rebounds: 5.9, assists: 4.8, steals: 1.1, turnovers: 1.9, fouls: 1.8, salary: 11765500, quality: 'X', offense: 182, defense: 185, image: 'images/batum.jpg' },
                { name: 'LaMarcus Aldridge', position: 'PF', team: 'Portland Trail Blazers', age: 29, points: 23.4, rebounds: 10.2, assists: 1.7, steals: 0.7, turnovers: 1.9, fouls: 2.0, salary: 16006000, quality: 'X', offense: 202, defense: 185, image: 'images/aldridge.jpg' },
                { name: 'Robin Lopez', position: 'C', team: 'Portland Trail Blazers', age: 26, points: 9.6, rebounds: 6.7, assists: 0.9, steals: 0.3, turnovers: 1.3, fouls: 2.8, salary: 5340229, quality: 'X', offense: 178, defense: 185, image: 'images/lopez.jpg' },
                { name: 'Chris Kaman', position: 'C', team: 'Portland Trail Blazers', age: 32, points: 8.6, rebounds: 6.5, assists: 1.0, steals: 0.3, turnovers: 1.3, fouls: 2.3, salary: 4800000, quality: 'X', offense: 175, defense: 178, image: 'images/kaman.jpg' },
                { name: 'Steve Blake', position: 'PG', team: 'Portland Trail Blazers', age: 34, points: 4.3, rebounds: 1.7, assists: 3.6, steals: 0.7, turnovers: 1.1, fouls: 1.4, salary: 2077000, quality: 'X', offense: 172, defense: 175, image: 'images/blake.jpg' },
                { name: 'CJ McCollum', position: 'SG', team: 'Portland Trail Blazers', age: 23, points: 6.8, rebounds: 1.5, assists: 1.0, steals: 0.7, turnovers: 0.8, fouls: 1.5, salary: 2421000, quality: 'X', offense: 175, defense: 172, image: 'images/mccollum.jpg' },
                { name: 'Meyers Leonard', position: 'C', team: 'Portland Trail Blazers', age: 22, points: 5.9, rebounds: 4.5, assists: 0.6, steals: 0.2, turnovers: 0.7, fouls: 2.3, salary: 2317920, quality: 'X', offense: 172, defense: 175, image: 'images/leonard.jpg' }
            ]
        },
        {
            name: 'Brooklyn Nets',
            players: [
                { name: 'Deron Williams', position: 'PG', team: 'Brooklyn Nets', age: 30, points: 13.0, rebounds: 3.5, assists: 6.6, steals: 0.9, turnovers: 2.4, fouls: 2.1, salary: 19754465, quality: 'X', offense: 182, defense: 178, image: 'images/williams.jpg' },
                { name: 'Joe Johnson', position: 'SG', team: 'Brooklyn Nets', age: 33, points: 14.4, rebounds: 4.8, assists: 3.7, steals: 0.7, turnovers: 1.8, fouls: 1.6, salary: 23180790, quality: 'X', offense: 185, defense: 180, image: 'images/johnson.jpg' },
                { name: 'Alan Anderson', position: 'SF', team: 'Brooklyn Nets', age: 32, points: 7.4, rebounds: 2.8, assists: 1.1, steals: 0.6, turnovers: 0.8, fouls: 2.0, salary: 1333484, quality: 'X', offense: 175, defense: 175, image: 'images/anderson.jpg' },
                { name: 'Thaddeus Young', position: 'PF', team: 'Brooklyn Nets', age: 26, points: 14.1, rebounds: 5.4, assists: 1.4, steals: 1.6, turnovers: 1.7, fouls: 2.1, salary: 9410869, quality: 'X', offense: 182, defense: 182, image: 'images/young.jpg' },
                { name: 'Brook Lopez', position: 'C', team: 'Brooklyn Nets', age: 26, points: 17.2, rebounds: 7.4, assists: 0.7, steals: 0.6, turnovers: 1.8, fouls: 2.5, salary: 15719063, quality: 'X', offense: 185, defense: 182, image: 'images/lopez.jpg' },
                { name: 'Jarrett Jack', position: 'PG', team: 'Brooklyn Nets', age: 31, points: 12.0, rebounds: 3.1, assists: 4.7, steals: 0.9, turnovers: 2.2, fouls: 2.1, salary: 6300000, quality: 'X', offense: 180, defense: 175, image: 'images/jack.jpg' },
                { name: 'Mason Plumlee', position: 'C', team: 'Brooklyn Nets', age: 24, points: 8.7, rebounds: 6.2, assists: 0.9, steals: 0.8, turnovers: 1.4, fouls: 2.8, salary: 1357080, quality: 'X', offense: 175, defense: 180, image: 'images/plumlee.jpg' },
                { name: 'Bojan Bogdanovic', position: 'SG', team: 'Brooklyn Nets', age: 25, points: 9.0, rebounds: 2.7, assists: 0.9, steals: 0.4, turnovers: 1.1, fouls: 1.8, salary: 3278720, quality: 'X', offense: 178, defense: 175, image: 'images/bogdanovic.jpg' },
                { name: 'Mirza Teletovic', position: 'PF', team: 'Brooklyn Nets', age: 29, points: 8.5, rebounds: 4.9, assists: 1.2, steals: 0.4, turnovers: 0.9, fouls: 2.0, salary: 3368100, quality: 'X', offense: 175, defense: 172, image: 'images/teletovic.jpg' }
            ]
        },
        {
            name: 'Phoenix Suns',
            players: [
                { name: 'Eric Bledsoe', position: 'PG', team: 'Phoenix Suns', age: 25, points: 17.0, rebounds: 5.2, assists: 6.1, steals: 1.6, turnovers: 3.4, fouls: 2.6, salary: 13000000, quality: 'X', offense: 185, defense: 185, image: 'images/bledsoe.jpg' },
                { name: 'Goran Dragic', position: 'SG', team: 'Phoenix Suns', age: 28, points: 16.2, rebounds: 3.6, assists: 4.1, steals: 1.0, turnovers: 2.2, fouls: 2.4, salary: 7500000, quality: 'X', offense: 185, defense: 180, image: 'images/dragic.jpg' },
                { name: 'P.J. Tucker', position: 'SF', team: 'Phoenix Suns', age: 29, points: 9.1, rebounds: 6.4, assists: 1.6, steals: 1.4, turnovers: 1.3, fouls: 3.2, salary: 5700000, quality: 'X', offense: 175, defense: 185, image: 'images/tucker.jpg' },
                { name: 'Markieff Morris', position: 'PF', team: 'Phoenix Suns', age: 25, points: 15.3, rebounds: 6.2, assists: 2.3, steals: 1.2, turnovers: 2.4, fouls: 3.3, salary: 2989239, quality: 'X', offense: 182, defense: 180, image: 'images/markieff.jpg' },
                { name: 'Alex Len', position: 'C', team: 'Phoenix Suns', age: 21, points: 6.3, rebounds: 6.6, assists: 0.5, steals: 0.5, turnovers: 1.3, fouls: 3.4, salary: 3649920, quality: 'X', offense: 175, defense: 182, image: 'images/len.jpg' },
                { name: 'Isaiah Thomas', position: 'PG', team: 'Phoenix Suns', age: 25, points: 15.2, rebounds: 2.4, assists: 3.7, steals: 1.0, turnovers: 2.0, fouls: 2.1, salary: 7238606, quality: 'X', offense: 185, defense: 175, image: 'images/thomas.jpg' },
                { name: 'Gerald Green', position: 'SG', team: 'Phoenix Suns', age: 29, points: 11.9, rebounds: 2.5, assists: 1.2, steals: 0.5, turnovers: 1.3, fouls: 2.1, salary: 3500000, quality: 'X', offense: 180, defense: 172, image: 'images/green.jpg' },
                { name: 'Marcus Morris', position: 'SF', team: 'Phoenix Suns', age: 25, points: 10.4, rebounds: 4.8, assists: 1.6, steals: 0.8, turnovers: 1.4, fouls: 2.8, salary: 2943960, quality: 'X', offense: 178, defense: 175, image: 'images/marcus.jpg' },
                { name: 'Brandan Wright', position: 'C', team: 'Phoenix Suns', age: 27, points: 7.3, rebounds: 4.3, assists: 0.5, steals: 0.5, turnovers: 0.7, fouls: 1.9, salary: 5000000, quality: 'X', offense: 175, defense: 180, image: 'images/wright.jpg' }
            ]
        },
        {
            name: 'Oklahoma City Thunder',
            players: [
                { name: 'Russell Westbrook', position: 'PG', team: 'Oklahoma City Thunder', age: 26, points: 28.1, rebounds: 7.3, assists: 8.6, steals: 2.1, turnovers: 4.4, fouls: 2.6, salary: 15719062, quality: 'X', offense: 215, defense: 188, image: 'images/westbrook.jpg' },
                { name: 'Andre Roberson', position: 'SG', team: 'Oklahoma City Thunder', age: 23, points: 3.4, rebounds: 3.8, assists: 1.0, steals: 0.8, turnovers: 0.5, fouls: 2.0, salary: 1208400, quality: 'X', offense: 170, defense: 185, image: 'images/roberson.jpg' },
                { name: 'Kevin Durant', position: 'SF', team: 'Oklahoma City Thunder', age: 26, points: 25.4, rebounds: 6.6, assists: 4.1, steals: 0.9, turnovers: 2.7, fouls: 1.9, salary: 18995624, quality: 'X', offense: 215, defense: 185, image: 'images/durant.jpg' },
                { name: 'Serge Ibaka', position: 'PF', team: 'Oklahoma City Thunder', age: 25, points: 14.3, rebounds: 7.8, assists: 0.9, steals: 0.5, turnovers: 1.4, fouls: 2.5, salary: 12350000, quality: 'X', offense: 182, defense: 190, image: 'images/ibaka.jpg' },
                { name: 'Steven Adams', position: 'C', team: 'Oklahoma City Thunder', age: 21, points: 7.7, rebounds: 7.5, assists: 0.9, steals: 0.5, turnovers: 1.3, fouls: 3.0, salary: 2184960, quality: 'X', offense: 175, defense: 185, image: 'images/adams.jpg' },
                { name: 'Dion Waiters', position: 'SG', team: 'Oklahoma City Thunder', age: 23, points: 11.8, rebounds: 2.9, assists: 1.9, steals: 1.0, turnovers: 1.4, fouls: 2.0, salary: 4062000, quality: 'X', offense: 180, defense: 175, image: 'images/waiters.jpg' },
                { name: 'Anthony Morrow', position: 'SG', team: 'Oklahoma City Thunder', age: 29, points: 10.7, rebounds: 2.6, assists: 0.8, steals: 0.5, turnovers: 0.7, fouls: 1.6, salary: 3200000, quality: 'X', offense: 180, defense: 172, image: 'images/morrow.jpg' },
                { name: 'Nick Collison', position: 'PF', team: 'Oklahoma City Thunder', age: 34, points: 4.1, rebounds: 3.8, assists: 1.4, steals: 0.4, turnovers: 0.8, fouls: 2.5, salary: 2242003, quality: 'X', offense: 170, defense: 178, image: 'images/collison.jpg' },
                { name: 'D.J. Augustin', position: 'PG', team: 'Oklahoma City Thunder', age: 27, points: 7.3, rebounds: 1.8, assists: 3.1, steals: 0.6, turnovers: 1.1, fouls: 1.2, salary: 3000000, quality: 'X', offense: 175, defense: 172, image: 'images/augustin.jpg' }
            ]
        },
        {
            name: 'New Orleans Pelicans',
            players: [
                { name: 'Jrue Holiday', position: 'PG', team: 'New Orleans Pelicans', age: 24, points: 14.8, rebounds: 3.4, assists: 6.9, steals: 1.6, turnovers: 2.3, fouls: 1.9, salary: 10404000, quality: 'X', offense: 185, defense: 185, image: 'images/holiday.jpg' },
                { name: 'Eric Gordon', position: 'SG', team: 'New Orleans Pelicans', age: 26, points: 13.4, rebounds: 2.6, assists: 3.8, steals: 0.8, turnovers: 1.8, fouls: 1.9, salary: 14898938, quality: 'X', offense: 182, defense: 178, image: 'images/gordon.jpg' },
                { name: 'Tyreke Evans', position: 'SF', team: 'New Orleans Pelicans', age: 25, points: 16.6, rebounds: 5.3, assists: 6.6, steals: 1.3, turnovers: 3.1, fouls: 2.4, salary: 10800000, quality: 'X', offense: 185, defense: 180, image: 'images/evans.jpg' },
                { name: 'Ryan Anderson', position: 'PF', team: 'New Orleans Pelicans', age: 26, points: 13.7, rebounds: 4.8, assists: 0.9, steals: 0.5, turnovers: 0.8, fouls: 1.8, salary: 8500000, quality: 'X', offense: 182, defense: 175, image: 'images/anderson.jpg' },
                { name: 'Anthony Davis', position: 'PF', team: 'New Orleans Pelicans', age: 21, points: 24.4, rebounds: 10.2, assists: 2.2, steals: 1.5, turnovers: 1.4, fouls: 2.0, salary: 5607240, quality: 'X', offense: 202, defense: 195, image: 'images/davis.jpg' },
                { name: 'Omer Asik', position: 'C', team: 'New Orleans Pelicans', age: 28, points: 7.3, rebounds: 9.8, assists: 0.9, steals: 0.4, turnovers: 1.3, fouls: 2.7, salary: 8374646, quality: 'X', offense: 172, defense: 185, image: 'images/asik.jpg' },
                { name: 'Quincy Pondexter', position: 'SF', team: 'New Orleans Pelicans', age: 26, points: 7.2, rebounds: 2.6, assists: 1.3, steals: 0.5, turnovers: 0.7, fouls: 1.8, salary: 3146068, quality: 'X', offense: 175, defense: 178, image: 'images/pondexter.jpg' },
                { name: 'Norris Cole', position: 'PG', team: 'New Orleans Pelicans', age: 26, points: 7.6, rebounds: 1.8, assists: 3.4, steals: 0.7, turnovers: 1.2, fouls: 1.5, salary: 2150000, quality: 'X', offense: 175, defense: 178, image: 'images/cole.jpg' },
                { name: 'Dante Cunningham', position: 'PF', team: 'New Orleans Pelicans', age: 27, points: 5.2, rebounds: 3.9, assists: 0.8, steals: 0.6, turnovers: 0.5, fouls: 1.8, salary: 981084, quality: 'X', offense: 172, defense: 175, image: 'images/cunningham.jpg' }
            ]
        },
        {
            name: 'Memphis Grizzlies',
            players: [
                { name: 'Mike Conley', position: 'PG', team: 'Memphis Grizzlies', age: 27, points: 15.8, rebounds: 3.0, assists: 5.4, steals: 1.3, turnovers: 1.7, fouls: 1.8, salary: 9388426, quality: 'X', offense: 185, defense: 188, image: 'images/conley.jpg' },
                { name: 'Courtney Lee', position: 'SG', team: 'Memphis Grizzlies', age: 29, points: 10.1, rebounds: 2.3, assists: 2.0, steals: 1.0, turnovers: 1.1, fouls: 1.7, salary: 5450000, quality: 'X', offense: 178, defense: 182, image: 'images/lee.jpg' },
                { name: 'Jeff Green', position: 'SF', team: 'Memphis Grizzlies', age: 28, points: 13.1, rebounds: 4.2, assists: 1.8, steals: 0.7, turnovers: 1.7, fouls: 2.0, salary: 9200000, quality: 'X', offense: 182, defense: 180, image: 'images/green.jpg' },
                { name: 'Zach Randolph', position: 'PF', team: 'Memphis Grizzlies', age: 33, points: 16.1, rebounds: 10.5, assists: 2.2, steals: 1.0, turnovers: 2.3, fouls: 2.5, salary: 16500000, quality: 'X', offense: 185, defense: 182, image: 'images/randolph.jpg' },
                { name: 'Marc Gasol', position: 'C', team: 'Memphis Grizzlies', age: 30, points: 17.4, rebounds: 7.8, assists: 3.8, steals: 0.9, turnovers: 2.2, fouls: 2.7, salary: 15829688, quality: 'X', offense: 188, defense: 192, image: 'images/gasol.jpg' },
                { name: 'Tony Allen', position: 'SG', team: 'Memphis Grizzlies', age: 33, points: 8.6, rebounds: 4.4, assists: 1.4, steals: 2.0, turnovers: 1.3, fouls: 2.2, salary: 5000000, quality: 'X', offense: 175, defense: 190, image: 'images/allen.jpg' },
                { name: 'Vince Carter', position: 'SF', team: 'Memphis Grizzlies', age: 38, points: 5.8, rebounds: 2.0, assists: 1.2, steals: 0.7, turnovers: 0.8, fouls: 1.4, salary: 4088019, quality: 'X', offense: 175, defense: 172, image: 'images/carter.jpg' },
                { name: 'Beno Udrih', position: 'PG', team: 'Memphis Grizzlies', age: 32, points: 7.7, rebounds: 1.8, assists: 2.8, steals: 0.7, turnovers: 1.1, fouls: 1.3, salary: 1145685, quality: 'X', offense: 175, defense: 172, image: 'images/udrih.jpg' },
                { name: 'Kosta Koufos', position: 'C', team: 'Memphis Grizzlies', age: 25, points: 5.2, rebounds: 5.3, assists: 0.5, steals: 0.4, turnovers: 0.8, fouls: 2.2, salary: 3000000, quality: 'X', offense: 172, defense: 178, image: 'images/koufos.jpg' }
            ]
        },
        {
            name: 'Dallas Mavericks',
            players: [
                { name: 'Rajon Rondo', position: 'PG', team: 'Dallas Mavericks', age: 28, points: 9.3, rebounds: 4.5, assists: 6.5, steals: 1.2, turnovers: 2.9, fouls: 2.5, salary: 12909090, quality: 'X', offense: 178, defense: 185, image: 'images/rondo.jpg' },
                { name: 'Monta Ellis', position: 'SG', team: 'Dallas Mavericks', age: 29, points: 18.9, rebounds: 2.4, assists: 4.1, steals: 1.9, turnovers: 2.5, fouls: 2.1, salary: 8360000, quality: 'X', offense: 188, defense: 180, image: 'images/ellis.jpg' },
                { name: 'Chandler Parsons', position: 'SF', team: 'Dallas Mavericks', age: 26, points: 15.7, rebounds: 4.9, assists: 2.4, steals: 1.0, turnovers: 1.7, fouls: 2.1, salary: 14700000, quality: 'X', offense: 185, defense: 180, image: 'images/parsons.jpg' },
                { name: 'Dirk Nowitzki', position: 'PF', team: 'Dallas Mavericks', age: 36, points: 17.3, rebounds: 5.9, assists: 1.9, steals: 0.5, turnovers: 1.3, fouls: 1.7, salary: 7974482, quality: 'X', offense: 188, defense: 180, image: 'images/nowitzki.jpg' },
                { name: 'Tyson Chandler', position: 'C', team: 'Dallas Mavericks', age: 32, points: 10.3, rebounds: 11.5, assists: 1.1, steals: 0.7, turnovers: 1.3, fouls: 2.7, salary: 14596888, quality: 'X', offense: 178, defense: 188, image: 'images/chandler.jpg' },
                { name: 'Devin Harris', position: 'PG', team: 'Dallas Mavericks', age: 31, points: 8.8, rebounds: 1.8, assists: 3.1, steals: 1.1, turnovers: 1.4, fouls: 2.0, salary: 3878000, quality: 'X', offense: 175, defense: 178, image: 'images/harris.jpg' },
                { name: 'J.J. Barea', position: 'PG', team: 'Dallas Mavericks', age: 30, points: 7.5, rebounds: 1.7, assists: 3.4, steals: 0.4, turnovers: 1.3, fouls: 1.2, salary: 3988424, quality: 'X', offense: 175, defense: 172, image: 'images/barea.jpg' },
                { name: 'Al-Farouq Aminu', position: 'SF', team: 'Dallas Mavericks', age: 24, points: 5.6, rebounds: 4.6, assists: 0.8, steals: 0.9, turnovers: 0.8, fouls: 1.9, salary: 981084, quality: 'X', offense: 172, defense: 180, image: 'images/aminu.jpg' },
                { name: 'Richard Jefferson', position: 'SF', team: 'Dallas Mavericks', age: 34, points: 5.8, rebounds: 2.5, assists: 0.8, steals: 0.5, turnovers: 0.6, fouls: 1.4, salary: 1448490, quality: 'X', offense: 172, defense: 175, image: 'images/jefferson.jpg' }
            ]
        },
        {
            name: 'Miami Heat',
            players: [
                { name: 'Goran Dragic', position: 'PG', team: 'Miami Heat', age: 28, points: 16.3, rebounds: 3.5, assists: 4.5, steals: 1.0, turnovers: 2.2, fouls: 2.4, salary: 7500000, quality: 'X', offense: 185, defense: 180, image: 'images/dragic.jpg' },
                { name: 'Dwyane Wade', position: 'SG', team: 'Miami Heat', age: 33, points: 21.5, rebounds: 3.5, assists: 4.8, steals: 1.2, turnovers: 3.4, fouls: 2.1, salary: 15000000, quality: 'X', offense: 188, defense: 182, image: 'images/wade.jpg' },
                { name: 'Luol Deng', position: 'SF', team: 'Miami Heat', age: 29, points: 14.0, rebounds: 5.2, assists: 1.9, steals: 0.9, turnovers: 1.4, fouls: 1.9, salary: 9714461, quality: 'X', offense: 182, defense: 185, image: 'images/deng.jpg' },
                { name: 'Chris Bosh', position: 'PF', team: 'Miami Heat', age: 30, points: 21.1, rebounds: 7.0, assists: 2.2, steals: 0.9, turnovers: 1.9, fouls: 2.0, salary: 20644400, quality: 'X', offense: 188, defense: 185, image: 'images/bosh.jpg' },
                { name: 'Hassan Whiteside', position: 'C', team: 'Miami Heat', age: 25, points: 11.8, rebounds: 10.0, assists: 0.1, steals: 0.9, turnovers: 1.6, fouls: 3.0, salary: 769881, quality: 'X', offense: 180, defense: 188, image: 'images/whiteside.jpg' },
                { name: 'Mario Chalmers', position: 'PG', team: 'Miami Heat', age: 28, points: 10.2, rebounds: 2.6, assists: 3.8, steals: 1.5, turnovers: 2.0, fouls: 2.5, salary: 4300000, quality: 'X', offense: 175, defense: 178, image: 'images/chalmers.jpg' },
                { name: 'Chris Andersen', position: 'C', team: 'Miami Heat', age: 36, points: 5.3, rebounds: 5.0, assists: 0.4, steals: 0.4, turnovers: 0.7, fouls: 2.6, salary: 5375000, quality: 'X', offense: 172, defense: 180, image: 'images/andersen.jpg' },
                { name: 'Shabazz Napier', position: 'PG', team: 'Miami Heat', age: 23, points: 5.1, rebounds: 2.2, assists: 2.5, steals: 1.0, turnovers: 1.6, fouls: 1.4, salary: 1032240, quality: 'X', offense: 172, defense: 175, image: 'images/napier.jpg' },
                { name: 'Udonis Haslem', position: 'PF', team: 'Miami Heat', age: 34, points: 4.2, rebounds: 4.2, assists: 0.6, steals: 0.3, turnovers: 0.6, fouls: 2.4, salary: 2732000, quality: 'X', offense: 170, defense: 175, image: 'images/haslem.jpg' }
            ]
        },
        {
            name: 'Indiana Pacers',
            players: [
                { name: 'George Hill', position: 'PG', team: 'Indiana Pacers', age: 28, points: 16.1, rebounds: 4.2, assists: 5.1, steals: 1.0, turnovers: 1.9, fouls: 2.1, salary: 8000000, quality: 'X', offense: 182, defense: 185, image: 'images/hill.jpg' },
                { name: 'C.J. Miles', position: 'SG', team: 'Indiana Pacers', age: 27, points: 13.5, rebounds: 3.1, assists: 1.3, steals: 0.9, turnovers: 1.2, fouls: 2.1, salary: 4500000, quality: 'X', offense: 180, defense: 178, image: 'images/miles.jpg' },
                { name: 'Solomon Hill', position: 'SF', team: 'Indiana Pacers', age: 23, points: 8.9, rebounds: 3.8, assists: 2.2, steals: 0.7, turnovers: 1.2, fouls: 2.0, salary: 1374840, quality: 'X', offense: 175, defense: 178, image: 'images/solomon.jpg' },
                { name: 'David West', position: 'PF', team: 'Indiana Pacers', age: 34, points: 11.7, rebounds: 6.8, assists: 3.4, steals: 0.7, turnovers: 1.9, fouls: 2.2, salary: 12000000, quality: 'X', offense: 182, defense: 182, image: 'images/west.jpg' },
                { name: 'Roy Hibbert', position: 'C', team: 'Indiana Pacers', age: 28, points: 10.6, rebounds: 7.1, assists: 1.1, steals: 0.2, turnovers: 1.8, fouls: 2.9, salary: 15514031, quality: 'X', offense: 175, defense: 188, image: 'images/hibbert.jpg' },
                { name: 'Rodney Stuckey', position: 'SG', team: 'Indiana Pacers', age: 28, points: 12.6, rebounds: 3.5, assists: 3.1, steals: 0.8, turnovers: 1.9, fouls: 1.9, salary: 1227985, quality: 'X', offense: 180, defense: 178, image: 'images/stuckey.jpg' },
                { name: 'Luis Scola', position: 'PF', team: 'Indiana Pacers', age: 34, points: 9.4, rebounds: 6.5, assists: 1.3, steals: 0.7, turnovers: 1.3, fouls: 2.5, salary: 4868499, quality: 'X', offense: 178, defense: 175, image: 'images/scola.jpg' },
                { name: 'Donald Sloan', position: 'PG', team: 'Indiana Pacers', age: 27, points: 7.4, rebounds: 2.7, assists: 3.6, steals: 0.5, turnovers: 1.7, fouls: 1.6, salary: 948163, quality: 'X', offense: 172, defense: 175, image: 'images/sloan.jpg' },
                { name: 'Lavoy Allen', position: 'PF', team: 'Indiana Pacers', age: 25, points: 5.0, rebounds: 5.1, assists: 1.2, steals: 0.4, turnovers: 0.8, fouls: 2.1, salary: 3000000, quality: 'X', offense: 170, defense: 175, image: 'images/allen.jpg' }
            ]
        },
        {
            name: 'Denver Nuggets',
            players: [
                { name: 'Ty Lawson', position: 'PG', team: 'Denver Nuggets', age: 27, points: 15.2, rebounds: 3.1, assists: 9.6, steals: 1.2, turnovers: 2.5, fouls: 1.8, salary: 11595506, quality: 'X', offense: 185, defense: 180, image: 'images/lawson.jpg' },
                { name: 'Randy Foye', position: 'SG', team: 'Denver Nuggets', age: 31, points: 8.7, rebounds: 1.7, assists: 2.4, steals: 0.6, turnovers: 1.2, fouls: 1.9, salary: 3000000, quality: 'X', offense: 175, defense: 175, image: 'images/foye.jpg' },
                { name: 'Wilson Chandler', position: 'SF', team: 'Denver Nuggets', age: 27, points: 13.9, rebounds: 6.1, assists: 1.7, steals: 0.7, turnovers: 1.3, fouls: 2.1, salary: 6757000, quality: 'X', offense: 182, defense: 180, image: 'images/chandler.jpg' },
                { name: 'Kenneth Faried', position: 'PF', team: 'Denver Nuggets', age: 25, points: 12.6, rebounds: 8.9, assists: 1.2, steals: 0.8, turnovers: 1.4, fouls: 2.3, salary: 11235955, quality: 'X', offense: 180, defense: 182, image: 'images/faried.jpg' },
                { name: 'Jusuf Nurkic', position: 'C', team: 'Denver Nuggets', age: 20, points: 6.9, rebounds: 6.2, assists: 1.1, steals: 1.1, turnovers: 1.5, fouls: 3.7, salary: 1562680, quality: 'X', offense: 172, defense: 182, image: 'images/nurkic.jpg' },
                { name: 'Will Barton', position: 'SG', team: 'Denver Nuggets', age: 24, points: 11.0, rebounds: 4.6, assists: 1.9, steals: 1.2, turnovers: 1.4, fouls: 1.8, salary: 915243, quality: 'X', offense: 178, defense: 175, image: 'images/barton.jpg' },
                { name: 'Danilo Gallinari', position: 'SF', team: 'Denver Nuggets', age: 26, points: 12.4, rebounds: 3.7, assists: 1.4, steals: 0.8, turnovers: 1.2, fouls: 1.8, salary: 10854850, quality: 'X', offense: 182, defense: 178, image: 'images/gallinari.jpg' },
                { name: 'J.J. Hickson', position: 'PF', team: 'Denver Nuggets', age: 26, points: 7.6, rebounds: 6.2, assists: 1.0, steals: 0.5, turnovers: 1.1, fouls: 2.0, salary: 5613500, quality: 'X', offense: 175, defense: 175, image: 'images/hickson.jpg' },
                { name: 'Jameer Nelson', position: 'PG', team: 'Denver Nuggets', age: 33, points: 8.3, rebounds: 2.3, assists: 4.0, steals: 0.7, turnovers: 1.7, fouls: 1.5, salary: 4360000, quality: 'X', offense: 175, defense: 172, image: 'images/nelson.jpg' }
            ]
        },
        {
            name: 'Utah Jazz',
            players: [
                { name: 'Dante Exum', position: 'PG', team: 'Utah Jazz', age: 19, points: 4.8, rebounds: 1.6, assists: 2.4, steals: 0.5, turnovers: 1.4, fouls: 1.7, salary: 3777720, quality: 'X', offense: 172, defense: 178, image: 'images/exum.jpg' },
                { name: 'Rodney Hood', position: 'SG', team: 'Utah Jazz', age: 22, points: 8.7, rebounds: 2.3, assists: 1.7, steals: 0.6, turnovers: 1.1, fouls: 1.9, salary: 1290360, quality: 'X', offense: 175, defense: 175, image: 'images/hood.jpg' },
                { name: 'Gordon Hayward', position: 'SF', team: 'Utah Jazz', age: 24, points: 19.3, rebounds: 4.9, assists: 4.1, steals: 1.4, turnovers: 2.7, fouls: 2.3, salary: 14746000, quality: 'X', offense: 188, defense: 182, image: 'images/hayward.jpg' },
                { name: 'Derrick Favors', position: 'PF', team: 'Utah Jazz', age: 23, points: 16.0, rebounds: 8.2, assists: 1.5, steals: 1.0, turnovers: 1.7, fouls: 2.8, salary: 12950000, quality: 'X', offense: 185, defense: 185, image: 'images/favors.jpg' },
                { name: 'Rudy Gobert', position: 'C', team: 'Utah Jazz', age: 22, points: 8.4, rebounds: 9.5, assists: 1.3, steals: 0.8, turnovers: 1.4, fouls: 2.7, salary: 1127400, quality: 'X', offense: 175, defense: 192, image: 'images/gobert.jpg' },
                { name: 'Trey Burke', position: 'PG', team: 'Utah Jazz', age: 22, points: 12.8, rebounds: 2.7, assists: 4.3, steals: 0.9, turnovers: 1.6, fouls: 1.5, salary: 2548560, quality: 'X', offense: 180, defense: 175, image: 'images/burke.jpg' },
                { name: 'Trevor Booker', position: 'PF', team: 'Utah Jazz', age: 27, points: 7.2, rebounds: 5.0, assists: 1.1, steals: 0.6, turnovers: 1.0, fouls: 2.5, salary: 5000000, quality: 'X', offense: 172, defense: 178, image: 'images/booker.jpg' },
                { name: 'Joe Ingles', position: 'SF', team: 'Utah Jazz', age: 27, points: 5.0, rebounds: 2.2, assists: 2.3, steals: 1.2, turnovers: 1.2, fouls: 1.8, salary: 1045000, quality: 'X', offense: 172, defense: 175, image: 'images/ingles.jpg' },
                { name: 'Elijah Millsap', position: 'SG', team: 'Utah Jazz', age: 27, points: 5.3, rebounds: 3.2, assists: 1.2, steals: 1.2, turnovers: 1.1, fouls: 2.4, salary: 816482, quality: 'X', offense: 170, defense: 178, image: 'images/millsap.jpg' }
            ]
        },
        {
            name: 'Sacramento Kings',
            players: [
                { name: 'Darren Collison', position: 'PG', team: 'Sacramento Kings', age: 27, points: 16.1, rebounds: 3.2, assists: 5.6, steals: 1.5, turnovers: 2.3, fouls: 2.1, salary: 4797664, quality: 'X', offense: 182, defense: 180, image: 'images/collison.jpg' },
                { name: 'Ben McLemore', position: 'SG', team: 'Sacramento Kings', age: 22, points: 12.1, rebounds: 2.9, assists: 1.7, steals: 0.9, turnovers: 1.7, fouls: 2.3, salary: 3156600, quality: 'X', offense: 178, defense: 175, image: 'images/mclemore.jpg' },
                { name: 'Rudy Gay', position: 'SF', team: 'Sacramento Kings', age: 28, points: 21.1, rebounds: 5.9, assists: 3.7, steals: 1.0, turnovers: 2.7, fouls: 2.4, salary: 19317326, quality: 'X', offense: 185, defense: 180, image: 'images/gay.jpg' },
                { name: 'Jason Thompson', position: 'PF', team: 'Sacramento Kings', age: 28, points: 6.1, rebounds: 6.5, assists: 0.9, steals: 0.5, turnovers: 1.1, fouls: 2.8, salary: 6431250, quality: 'X', offense: 172, defense: 178, image: 'images/thompson.jpg' },
                { name: 'DeMarcus Cousins', position: 'C', team: 'Sacramento Kings', age: 24, points: 24.1, rebounds: 12.7, assists: 3.6, steals: 1.5, turnovers: 4.3, fouls: 3.6, salary: 14746000, quality: 'X', offense: 202, defense: 188, image: 'images/cousins.jpg' },
                { name: 'Carl Landry', position: 'PF', team: 'Sacramento Kings', age: 31, points: 7.2, rebounds: 3.8, assists: 0.8, steals: 0.3, turnovers: 0.9, fouls: 2.1, salary: 6500000, quality: 'X', offense: 175, defense: 172, image: 'images/landry.jpg' },
                { name: 'Omri Casspi', position: 'SF', team: 'Sacramento Kings', age: 26, points: 8.9, rebounds: 3.9, assists: 1.5, steals: 0.7, turnovers: 1.1, fouls: 1.9, salary: 1063384, quality: 'X', offense: 175, defense: 172, image: 'images/casspi.jpg' },
                { name: 'Ray McCallum', position: 'PG', team: 'Sacramento Kings', age: 23, points: 7.4, rebounds: 2.6, assists: 2.8, steals: 0.7, turnovers: 1.2, fouls: 1.6, salary: 816482, quality: 'X', offense: 172, defense: 175, image: 'images/mccallum.jpg' },
                { name: 'Derrick Williams', position: 'PF', team: 'Sacramento Kings', age: 23, points: 8.3, rebounds: 2.7, assists: 0.8, steals: 0.5, turnovers: 0.9, fouls: 1.5, salary: 6331404, quality: 'X', offense: 175, defense: 172, image: 'images/williams.jpg' }
            ]
        },
        {
            name: 'Detroit Pistons',
            players: [
                { name: 'Reggie Jackson', position: 'PG', team: 'Detroit Pistons', age: 24, points: 14.5, rebounds: 4.2, assists: 6.0, steals: 0.7, turnovers: 2.8, fouls: 2.3, salary: 2204369, quality: 'X', offense: 182, defense: 178, image: 'images/jackson.jpg' },
                { name: 'Kentavious Caldwell-Pope', position: 'SG', team: 'Detroit Pistons', age: 22, points: 12.7, rebounds: 3.1, assists: 1.3, steals: 1.1, turnovers: 1.3, fouls: 2.3, salary: 2772480, quality: 'X', offense: 178, defense: 182, image: 'images/caldwell-pope.jpg' },
                { name: 'Tayshaun Prince', position: 'SF', team: 'Detroit Pistons', age: 34, points: 7.5, rebounds: 3.2, assists: 1.4, steals: 0.4, turnovers: 0.8, fouls: 1.3, salary: 7707865, quality: 'X', offense: 172, defense: 178, image: 'images/prince.jpg' },
                { name: 'Greg Monroe', position: 'PF', team: 'Detroit Pistons', age: 24, points: 15.9, rebounds: 10.2, assists: 2.1, steals: 1.1, turnovers: 2.3, fouls: 2.8, salary: 5479934, quality: 'X', offense: 185, defense: 182, image: 'images/monroe.jpg' },
                { name: 'Andre Drummond', position: 'C', team: 'Detroit Pistons', age: 21, points: 13.8, rebounds: 13.5, assists: 0.7, steals: 0.9, turnovers: 1.8, fouls: 3.0, salary: 2568360, quality: 'X', offense: 182, defense: 188, image: 'images/drummond.jpg' },
                { name: 'Anthony Tolliver', position: 'PF', team: 'Detroit Pistons', age: 29, points: 7.7, rebounds: 3.7, assists: 0.9, steals: 0.5, turnovers: 0.7, fouls: 2.1, salary: 3000000, quality: 'X', offense: 175, defense: 175, image: 'images/tolliver.jpg' },
                { name: 'Jodie Meeks', position: 'SG', team: 'Detroit Pistons', age: 27, points: 11.1, rebounds: 1.7, assists: 1.3, steals: 0.9, turnovers: 1.0, fouls: 1.7, salary: 6270000, quality: 'X', offense: 178, defense: 175, image: 'images/meeks.jpg' },
                { name: 'Spencer Dinwiddie', position: 'PG', team: 'Detroit Pistons', age: 22, points: 4.3, rebounds: 1.4, assists: 3.1, steals: 0.6, turnovers: 1.3, fouls: 1.5, salary: 750000, quality: 'X', offense: 170, defense: 175, image: 'images/dinwiddie.jpg' },
                { name: 'Joel Anthony', position: 'C', team: 'Detroit Pistons', age: 32, points: 1.8, rebounds: 1.9, assists: 0.3, steals: 0.2, turnovers: 0.3, fouls: 1.3, salary: 5000000, quality: 'X', offense: 165, defense: 175, image: 'images/anthony.jpg' }
            ]
        },
        {
            name: 'Minnesota Timberwolves',
            players: [
                { name: 'Ricky Rubio', position: 'PG', team: 'Minnesota Timberwolves', age: 24, points: 10.3, rebounds: 4.2, assists: 8.8, steals: 1.7, turnovers: 2.5, fouls: 2.6, salary: 12700000, quality: 'X', offense: 178, defense: 185, image: 'images/rubio.jpg' },
                { name: 'Kevin Martin', position: 'SG', team: 'Minnesota Timberwolves', age: 32, points: 20.0, rebounds: 3.6, assists: 2.3, steals: 1.0, turnovers: 1.8, fouls: 1.8, salary: 6792500, quality: 'X', offense: 185, defense: 175, image: 'images/martin.jpg' },
                { name: 'Andrew Wiggins', position: 'SF', team: 'Minnesota Timberwolves', age: 20, points: 16.9, rebounds: 4.6, assists: 2.1, steals: 1.0, turnovers: 2.2, fouls: 2.3, salary: 5510640, quality: 'X', offense: 185, defense: 182, image: 'images/wiggins.jpg' },
                { name: 'Gorgui Dieng', position: 'PF', team: 'Minnesota Timberwolves', age: 25, points: 9.7, rebounds: 8.3, assists: 2.0, steals: 1.0, turnovers: 1.7, fouls: 3.2, salary: 1413480, quality: 'X', offense: 175, defense: 182, image: 'images/dieng.jpg' },
                { name: 'Nikola Pekovic', position: 'C', team: 'Minnesota Timberwolves', age: 29, points: 12.5, rebounds: 7.5, assists: 0.9, steals: 0.4, turnovers: 1.5, fouls: 2.8, salary: 12100000, quality: 'X', offense: 182, defense: 178, image: 'images/pekovic.jpg' },
                { name: 'Zach LaVine', position: 'PG', team: 'Minnesota Timberwolves', age: 20, points: 10.1, rebounds: 2.8, assists: 3.6, steals: 0.7, turnovers: 2.5, fouls: 2.2, salary: 3380160, quality: 'X', offense: 178, defense: 172, image: 'images/lavine.jpg' },
                { name: 'Chase Budinger', position: 'SF', team: 'Minnesota Timberwolves', age: 26, points: 6.8, rebounds: 3.0, assists: 1.0, steals: 0.5, turnovers: 0.8, fouls: 1.2, salary: 5000000, quality: 'X', offense: 175, defense: 172, image: 'images/budinger.jpg' },
                { name: 'Adreian Payne', position: 'PF', team: 'Minnesota Timberwolves', age: 23, points: 6.7, rebounds: 5.1, assists: 1.0, steals: 0.4, turnovers: 1.2, fouls: 2.3, salary: 1932240, quality: 'X', offense: 172, defense: 175, image: 'images/payne.jpg' },
                { name: 'Anthony Bennett', position: 'PF', team: 'Minnesota Timberwolves', age: 22, points: 5.2, rebounds: 3.8, assists: 0.8, steals: 0.3, turnovers: 0.9, fouls: 1.6, salary: 5563920, quality: 'X', offense: 170, defense: 172, image: 'images/bennett.jpg' }
            ]
        },
        {
            name: 'Orlando Magic',
            players: [
                { name: 'Elfrid Payton', position: 'PG', team: 'Orlando Magic', age: 21, points: 8.9, rebounds: 4.3, assists: 6.5, steals: 1.7, turnovers: 2.5, fouls: 2.3, salary: 2505720, quality: 'X', offense: 175, defense: 182, image: 'images/payton.jpg' },
                { name: 'Victor Oladipo', position: 'SG', team: 'Orlando Magic', age: 22, points: 17.9, rebounds: 4.2, assists: 4.1, steals: 1.7, turnovers: 2.8, fouls: 2.4, salary: 5184480, quality: 'X', offense: 185, defense: 185, image: 'images/oladipo.jpg' },
                { name: 'Tobias Harris', position: 'SF', team: 'Orlando Magic', age: 22, points: 17.1, rebounds: 6.3, assists: 1.8, steals: 1.0, turnovers: 1.6, fouls: 2.0, salary: 2380594, quality: 'X', offense: 185, defense: 178, image: 'images/harris.jpg' },
                { name: 'Channing Frye', position: 'PF', team: 'Orlando Magic', age: 31, points: 7.3, rebounds: 3.9, assists: 1.3, steals: 0.5, turnovers: 0.8, fouls: 2.0, salary: 8579088, quality: 'X', offense: 175, defense: 175, image: 'images/frye.jpg' },
                { name: 'Nikola Vucevic', position: 'C', team: 'Orlando Magic', age: 24, points: 19.3, rebounds: 10.9, assists: 2.0, steals: 0.7, turnovers: 2.1, fouls: 2.6, salary: 11250000, quality: 'X', offense: 188, defense: 182, image: 'images/vucevic.jpg' },
                { name: 'Ben Gordon', position: 'SG', team: 'Orlando Magic', age: 31, points: 6.2, rebounds: 1.1, assists: 1.1, steals: 0.4, turnovers: 0.8, fouls: 1.1, salary: 4500000, quality: 'X', offense: 172, defense: 170, image: 'images/gordon.jpg' },
                { name: 'Willie Green', position: 'SG', team: 'Orlando Magic', age: 33, points: 5.9, rebounds: 1.5, assists: 1.3, steals: 0.5, turnovers: 0.7, fouls: 1.5, salary: 1448490, quality: 'X', offense: 172, defense: 172, image: 'images/green.jpg' },
                { name: 'Aaron Gordon', position: 'PF', team: 'Orlando Magic', age: 19, points: 5.2, rebounds: 3.6, assists: 0.7, steals: 0.4, turnovers: 0.7, fouls: 1.5, salary: 4171680, quality: 'X', offense: 172, defense: 178, image: 'images/agordon.jpg' },
                { name: 'Dewayne Dedmon', position: 'C', team: 'Orlando Magic', age: 25, points: 3.7, rebounds: 5.0, assists: 0.3, steals: 0.3, turnovers: 0.8, fouls: 2.3, salary: 816482, quality: 'X', offense: 170, defense: 178, image: 'images/dedmon.jpg' }
            ]
        },
        {
            name: 'Milwaukee Bucks',
            players: [
                { name: 'Michael Carter-Williams', position: 'PG', team: 'Milwaukee Bucks', age: 23, points: 14.6, rebounds: 5.3, assists: 6.7, steals: 1.7, turnovers: 3.8, fouls: 2.2, salary: 2300040, quality: 'X', offense: 182, defense: 185, image: 'images/carter-williams.jpg' },
                { name: 'Khris Middleton', position: 'SG', team: 'Milwaukee Bucks', age: 23, points: 13.4, rebounds: 4.4, assists: 2.3, steals: 1.5, turnovers: 1.4, fouls: 2.3, salary: 915243, quality: 'X', offense: 182, defense: 182, image: 'images/middleton.jpg' },
                { name: 'Giannis Antetokounmpo', position: 'SF', team: 'Milwaukee Bucks', age: 20, points: 12.7, rebounds: 6.7, assists: 2.6, steals: 0.9, turnovers: 2.1, fouls: 3.1, salary: 1873200, quality: 'X', offense: 182, defense: 185, image: 'images/antetokounmpo.jpg' },
                { name: 'Ersan Ilyasova', position: 'PF', team: 'Milwaukee Bucks', age: 27, points: 11.5, rebounds: 4.8, assists: 1.0, steals: 0.7, turnovers: 1.0, fouls: 2.5, salary: 7900000, quality: 'X', offense: 178, defense: 175, image: 'images/ilyasova.jpg' },
                { name: 'Zaza Pachulia', position: 'C', team: 'Milwaukee Bucks', age: 30, points: 8.3, rebounds: 6.8, assists: 2.4, steals: 0.7, turnovers: 1.4, fouls: 2.7, salary: 5200000, quality: 'X', offense: 175, defense: 180, image: 'images/pachulia.jpg' },
                { name: 'O.J. Mayo', position: 'SG', team: 'Milwaukee Bucks', age: 27, points: 11.4, rebounds: 2.6, assists: 2.8, steals: 0.9, turnovers: 1.6, fouls: 2.1, salary: 8000000, quality: 'X', offense: 180, defense: 175, image: 'images/mayo.jpg' },
                { name: 'Jared Dudley', position: 'SF', team: 'Milwaukee Bucks', age: 29, points: 7.2, rebounds: 3.1, assists: 1.8, steals: 1.0, turnovers: 0.8, fouls: 1.8, salary: 4250000, quality: 'X', offense: 175, defense: 178, image: 'images/dudley.jpg' },
                { name: 'John Henson', position: 'C', team: 'Milwaukee Bucks', age: 24, points: 7.0, rebounds: 4.7, assists: 0.9, steals: 0.3, turnovers: 1.0, fouls: 2.0, salary: 1987320, quality: 'X', offense: 172, defense: 182, image: 'images/henson.jpg' },
                { name: 'Jerryd Bayless', position: 'PG', team: 'Milwaukee Bucks', age: 26, points: 7.8, rebounds: 2.1, assists: 3.0, steals: 0.8, turnovers: 1.2, fouls: 1.6, salary: 3000000, quality: 'X', offense: 175, defense: 175, image: 'images/bayless.jpg' }
            ]
        },
        {
            name: 'Brooklyn Nets',
            players: [
                { name: 'Deron Williams', position: 'PG', team: 'Brooklyn Nets', age: 30, points: 13.0, rebounds: 3.5, assists: 6.6, steals: 0.9, turnovers: 2.4, fouls: 2.1, salary: 19754465, quality: 'X', offense: 182, defense: 178, image: 'images/williams.jpg' },
                { name: 'Joe Johnson', position: 'SG', team: 'Brooklyn Nets', age: 33, points: 14.4, rebounds: 4.8, assists: 3.7, steals: 0.7, turnovers: 1.8, fouls: 1.6, salary: 23180790, quality: 'X', offense: 182, defense: 178, image: 'images/johnson.jpg' },
                { name: 'Alan Anderson', position: 'SF', team: 'Brooklyn Nets', age: 32, points: 7.4, rebounds: 2.8, assists: 1.1, steals: 0.6, turnovers: 0.8, fouls: 2.0, salary: 1333484, quality: 'X', offense: 175, defense: 175, image: 'images/anderson.jpg' },
                { name: 'Thaddeus Young', position: 'PF', team: 'Brooklyn Nets', age: 26, points: 14.1, rebounds: 5.4, assists: 1.4, steals: 1.6, turnovers: 1.7, fouls: 2.1, salary: 9410869, quality: 'X', offense: 182, defense: 182, image: 'images/young.jpg' },
                { name: 'Brook Lopez', position: 'C', team: 'Brooklyn Nets', age: 26, points: 17.2, rebounds: 7.4, assists: 0.7, steals: 0.6, turnovers: 1.8, fouls: 2.5, salary: 15719063, quality: 'X', offense: 185, defense: 182, image: 'images/lopez.jpg' },
                { name: 'Jarrett Jack', position: 'PG', team: 'Brooklyn Nets', age: 31, points: 12.0, rebounds: 3.1, assists: 4.7, steals: 0.9, turnovers: 2.2, fouls: 2.1, salary: 6300000, quality: 'X', offense: 178, defense: 175, image: 'images/jack.jpg' },
                { name: 'Bojan Bogdanovic', position: 'SG', team: 'Brooklyn Nets', age: 25, points: 9.0, rebounds: 2.7, assists: 0.9, steals: 0.4, turnovers: 1.1, fouls: 1.8, salary: 3278720, quality: 'X', offense: 175, defense: 172, image: 'images/bogdanovic.jpg' },
                { name: 'Mason Plumlee', position: 'C', team: 'Brooklyn Nets', age: 24, points: 8.7, rebounds: 6.2, assists: 0.9, steals: 0.8, turnovers: 1.4, fouls: 2.8, salary: 1357080, quality: 'X', offense: 175, defense: 180, image: 'images/plumlee.jpg' },
                { name: 'Mirza Teletovic', position: 'PF', team: 'Brooklyn Nets', age: 29, points: 8.5, rebounds: 4.9, assists: 1.2, steals: 0.4, turnovers: 0.9, fouls: 2.0, salary: 3368100, quality: 'X', offense: 175, defense: 172, image: 'images/teletovic.jpg' }
            ]
        },
        {
            name: 'Toronto Raptors',
            players: [
                { name: 'Kyle Lowry', position: 'PG', team: 'Toronto Raptors', age: 28, points: 17.8, rebounds: 4.7, assists: 6.8, steals: 1.6, turnovers: 2.5, fouls: 2.7, salary: 12000000, quality: 'X', offense: 188, defense: 185, image: 'images/lowry.jpg' },
                { name: 'DeMar DeRozan', position: 'SG', team: 'Toronto Raptors', age: 25, points: 20.1, rebounds: 4.6, assists: 3.5, steals: 1.2, turnovers: 2.3, fouls: 2.1, salary: 9500000, quality: 'X', offense: 190, defense: 182, image: 'images/derozan.jpg' },
                { name: 'Terrence Ross', position: 'SF', team: 'Toronto Raptors', age: 24, points: 9.8, rebounds: 2.8, assists: 1.0, steals: 0.8, turnovers: 0.8, fouls: 1.8, salary: 2793960, quality: 'X', offense: 178, defense: 175, image: 'images/ross.jpg' },
                { name: 'Amir Johnson', position: 'PF', team: 'Toronto Raptors', age: 27, points: 9.3, rebounds: 6.1, assists: 1.6, steals: 0.8, turnovers: 1.2, fouls: 3.1, salary: 7000000, quality: 'X', offense: 175, defense: 182, image: 'images/johnson.jpg' },
                { name: 'Jonas Valanciunas', position: 'C', team: 'Toronto Raptors', age: 22, points: 12.0, rebounds: 8.7, assists: 0.5, steals: 0.4, turnovers: 1.8, fouls: 3.2, salary: 4660482, quality: 'X', offense: 180, defense: 185, image: 'images/valanciunas.jpg' },
                { name: 'Lou Williams', position: 'SG', team: 'Toronto Raptors', age: 28, points: 15.5, rebounds: 1.9, assists: 2.1, steals: 1.1, turnovers: 1.3, fouls: 1.9, salary: 5450000, quality: 'X', offense: 185, defense: 175, image: 'images/williams.jpg' },
                { name: 'Patrick Patterson', position: 'PF', team: 'Toronto Raptors', age: 25, points: 8.0, rebounds: 5.3, assists: 1.9, steals: 0.7, turnovers: 0.8, fouls: 2.1, salary: 6268675, quality: 'X', offense: 175, defense: 180, image: 'images/patterson.jpg' },
                { name: 'Greivis Vasquez', position: 'PG', team: 'Toronto Raptors', age: 28, points: 9.5, rebounds: 2.6, assists: 3.7, steals: 0.6, turnovers: 1.5, fouls: 1.8, salary: 6600000, quality: 'X', offense: 178, defense: 172, image: 'images/vasquez.jpg' }
            ]
        },
        {
            name: 'Chicago Bulls',
            players: [
                { name: 'Derrick Rose', position: 'PG', team: 'Chicago Bulls', age: 26, points: 17.7, rebounds: 3.2, assists: 4.9, steals: 0.7, turnovers: 3.2, fouls: 1.6, salary: 18862876, quality: 'X', offense: 188, defense: 180, image: 'images/rose.jpg' },
                { name: 'Jimmy Butler', position: 'SG', team: 'Chicago Bulls', age: 25, points: 20.0, rebounds: 5.8, assists: 3.3, steals: 1.8, turnovers: 1.4, fouls: 1.9, salary: 2008748, quality: 'X', offense: 190, defense: 192, image: 'images/butler.jpg' },
                { name: 'Mike Dunleavy', position: 'SF', team: 'Chicago Bulls', age: 34, points: 9.4, rebounds: 3.9, assists: 1.8, steals: 0.6, turnovers: 1.0, fouls: 2.1, salary: 3326235, quality: 'X', offense: 175, defense: 175, image: 'images/dunleavy.jpg' },
                { name: 'Pau Gasol', position: 'PF', team: 'Chicago Bulls', age: 34, points: 18.5, rebounds: 11.8, assists: 2.7, steals: 0.3, turnovers: 2.2, fouls: 2.1, salary: 7128000, quality: 'X', offense: 192, defense: 185, image: 'images/gasol.jpg' },
                { name: 'Joakim Noah', position: 'C', team: 'Chicago Bulls', age: 30, points: 7.2, rebounds: 9.6, assists: 4.7, steals: 0.7, turnovers: 1.8, fouls: 3.1, salary: 12700000, quality: 'X', offense: 175, defense: 190, image: 'images/noah.jpg' },
                { name: 'Taj Gibson', position: 'PF', team: 'Chicago Bulls', age: 29, points: 10.3, rebounds: 6.4, assists: 1.1, steals: 0.6, turnovers: 1.3, fouls: 2.7, salary: 8000000, quality: 'X', offense: 178, defense: 185, image: 'images/gibson.jpg' },
                { name: 'Aaron Brooks', position: 'PG', team: 'Chicago Bulls', age: 30, points: 11.6, rebounds: 2.0, assists: 3.2, steals: 0.7, turnovers: 1.7, fouls: 1.6, salary: 1145685, quality: 'X', offense: 180, defense: 172, image: 'images/brooks.jpg' },
                { name: 'Nikola Mirotic', position: 'PF', team: 'Chicago Bulls', age: 24, points: 10.2, rebounds: 4.9, assists: 1.2, steals: 0.7, turnovers: 1.4, fouls: 2.7, salary: 5543725, quality: 'X', offense: 180, defense: 178, image: 'images/mirotic.jpg' }
            ]
        },
        {
            name: 'Washington Wizards',
            players: [
                { name: 'John Wall', position: 'PG', team: 'Washington Wizards', age: 24, points: 17.6, rebounds: 4.6, assists: 10.0, steals: 1.7, turnovers: 3.8, fouls: 2.0, salary: 14746000, quality: 'X', offense: 192, defense: 188, image: 'images/wall.jpg' },
                { name: 'Bradley Beal', position: 'SG', team: 'Washington Wizards', age: 21, points: 15.3, rebounds: 3.8, assists: 3.1, steals: 1.2, turnovers: 1.8, fouls: 2.0, salary: 4505280, quality: 'X', offense: 185, defense: 182, image: 'images/beal.jpg' },
                { name: 'Paul Pierce', position: 'SF', team: 'Washington Wizards', age: 37, points: 11.9, rebounds: 4.0, assists: 2.0, steals: 1.1, turnovers: 1.4, fouls: 2.5, salary: 5305000, quality: 'X', offense: 182, defense: 178, image: 'images/pierce.jpg' },
                { name: 'Nene Hilario', position: 'PF', team: 'Washington Wizards', age: 32, points: 11.0, rebounds: 5.1, assists: 1.8, steals: 1.0, turnovers: 1.8, fouls: 3.1, salary: 13000000, quality: 'X', offense: 180, defense: 185, image: 'images/nene.jpg' },
                { name: 'Marcin Gortat', position: 'C', team: 'Washington Wizards', age: 31, points: 12.2, rebounds: 8.7, assists: 1.2, steals: 0.6, turnovers: 1.6, fouls: 2.7, salary: 12000000, quality: 'X', offense: 182, defense: 185, image: 'images/gortat.jpg' },
                { name: 'Ramon Sessions', position: 'PG', team: 'Washington Wizards', age: 29, points: 7.4, rebounds: 2.7, assists: 3.1, steals: 0.6, turnovers: 1.2, fouls: 1.4, salary: 2077000, quality: 'X', offense: 175, defense: 172, image: 'images/sessions.jpg' },
                { name: 'Kris Humphries', position: 'PF', team: 'Washington Wizards', age: 30, points: 8.0, rebounds: 6.5, assists: 0.9, steals: 0.5, turnovers: 0.8, fouls: 2.2, salary: 4600000, quality: 'X', offense: 172, defense: 178, image: 'images/humphries.jpg' },
                { name: 'Otto Porter', position: 'SF', team: 'Washington Wizards', age: 21, points: 6.0, rebounds: 3.0, assists: 1.6, steals: 0.6, turnovers: 0.7, fouls: 1.6, salary: 4662960, quality: 'X', offense: 172, defense: 175, image: 'images/porter.jpg' }
            ]
        },
        {
            name: 'Boston Celtics',
            players: [
                { name: 'Isaiah Thomas', position: 'PG', team: 'Boston Celtics', age: 26, points: 19.0, rebounds: 2.1, assists: 5.4, steals: 0.9, turnovers: 2.3, fouls: 2.0, salary: 7238606, quality: 'X', offense: 188, defense: 175, image: 'images/thomas.jpg' },
                { name: 'Avery Bradley', position: 'SG', team: 'Boston Celtics', age: 24, points: 13.9, rebounds: 3.1, assists: 1.8, steals: 1.1, turnovers: 1.4, fouls: 2.2, salary: 7730337, quality: 'X', offense: 180, defense: 185, image: 'images/bradley.jpg' },
                { name: 'Evan Turner', position: 'SF', team: 'Boston Celtics', age: 26, points: 9.5, rebounds: 5.1, assists: 5.5, steals: 1.0, turnovers: 2.4, fouls: 2.4, salary: 3278000, quality: 'X', offense: 178, defense: 180, image: 'images/turner.jpg' },
                { name: 'Brandon Bass', position: 'PF', team: 'Boston Celtics', age: 29, points: 10.6, rebounds: 4.9, assists: 1.3, steals: 0.5, turnovers: 1.0, fouls: 2.1, salary: 6900000, quality: 'X', offense: 178, defense: 178, image: 'images/bass.jpg' },
                { name: 'Tyler Zeller', position: 'C', team: 'Boston Celtics', age: 25, points: 10.2, rebounds: 5.7, assists: 1.4, steals: 0.3, turnovers: 1.1, fouls: 2.5, salary: 1703760, quality: 'X', offense: 178, defense: 180, image: 'images/zeller.jpg' },
                { name: 'Marcus Smart', position: 'PG', team: 'Boston Celtics', age: 21, points: 7.8, rebounds: 3.3, assists: 3.1, steals: 1.5, turnovers: 1.5, fouls: 2.5, salary: 3283320, quality: 'X', offense: 172, defense: 185, image: 'images/smart.jpg' },
                { name: 'Jae Crowder', position: 'SF', team: 'Boston Celtics', age: 24, points: 9.5, rebounds: 4.6, assists: 1.4, steals: 1.0, turnovers: 0.9, fouls: 2.4, salary: 915243, quality: 'X', offense: 175, defense: 182, image: 'images/crowder.jpg' },
                { name: 'Kelly Olynyk', position: 'C', team: 'Boston Celtics', age: 23, points: 10.3, rebounds: 4.7, assists: 1.7, steals: 0.8, turnovers: 1.4, fouls: 3.2, salary: 2075760, quality: 'X', offense: 178, defense: 175, image: 'images/olynyk.jpg' }
            ]
        },
        {
            name: 'Philadelphia 76ers',
            players: [
                { name: 'Michael Carter-Williams', position: 'PG', team: 'Philadelphia 76ers', age: 23, points: 15.0, rebounds: 6.2, assists: 7.4, steals: 1.5, turnovers: 4.2, fouls: 2.2, salary: 2300040, quality: 'X', offense: 182, defense: 180, image: 'images/carter-williams.jpg' },
                { name: 'Robert Covington', position: 'SF', team: 'Philadelphia 76ers', age: 24, points: 13.5, rebounds: 4.5, assists: 1.5, steals: 1.4, turnovers: 1.6, fouls: 2.5, salary: 1000000, quality: 'X', offense: 180, defense: 178, image: 'images/covington.jpg' },
                { name: 'Nerlens Noel', position: 'C', team: 'Philadelphia 76ers', age: 20, points: 9.9, rebounds: 8.1, assists: 1.7, steals: 1.8, turnovers: 1.8, fouls: 3.1, salary: 3315120, quality: 'X', offense: 175, defense: 188, image: 'images/noel.jpg' },
                { name: 'Luc Mbah a Moute', position: 'PF', team: 'Philadelphia 76ers', age: 28, points: 9.9, rebounds: 4.9, assists: 1.6, steals: 1.2, turnovers: 1.3, fouls: 2.4, salary: 4382576, quality: 'X', offense: 172, defense: 182, image: 'images/mbah-a-moute.jpg' },
                { name: 'Henry Sims', position: 'C', team: 'Philadelphia 76ers', age: 24, points: 8.0, rebounds: 4.9, assists: 1.1, steals: 0.4, turnovers: 1.3, fouls: 2.5, salary: 915243, quality: 'X', offense: 172, defense: 175, image: 'images/sims.jpg' },
                { name: 'Tony Wroten', position: 'SG', team: 'Philadelphia 76ers', age: 21, points: 16.9, rebounds: 2.9, assists: 5.2, steals: 1.6, turnovers: 3.8, fouls: 2.1, salary: 1210080, quality: 'X', offense: 180, defense: 175, image: 'images/wroten.jpg' },
                { name: 'Hollis Thompson', position: 'SG', team: 'Philadelphia 76ers', age: 23, points: 8.8, rebounds: 2.8, assists: 1.1, steals: 0.7, turnovers: 0.9, fouls: 1.9, salary: 816482, quality: 'X', offense: 175, defense: 172, image: 'images/thompson.jpg' },
                { name: 'JaKarr Sampson', position: 'SF', team: 'Philadelphia 76ers', age: 21, points: 5.2, rebounds: 2.2, assists: 1.0, steals: 0.4, turnovers: 0.8, fouls: 1.8, salary: 507336, quality: 'X', offense: 170, defense: 172, image: 'images/sampson.jpg' }
            ]
        },
        {
            name: 'New York Knicks',
            players: [
                { name: 'Jose Calderon', position: 'PG', team: 'New York Knicks', age: 33, points: 9.1, rebounds: 3.0, assists: 4.7, steals: 0.7, turnovers: 1.4, fouls: 1.5, salary: 7097191, quality: 'X', offense: 175, defense: 172, image: 'images/calderon.jpg' },
                { name: 'Tim Hardaway Jr.', position: 'SG', team: 'New York Knicks', age: 22, points: 11.5, rebounds: 2.2, assists: 1.8, steals: 0.3, turnovers: 1.1, fouls: 1.8, salary: 1304520, quality: 'X', offense: 178, defense: 172, image: 'images/hardaway.jpg' },
                { name: 'Carmelo Anthony', position: 'SF', team: 'New York Knicks', age: 30, points: 24.2, rebounds: 6.6, assists: 3.1, steals: 1.0, turnovers: 2.2, fouls: 2.5, salary: 22458000, quality: 'X', offense: 195, defense: 180, image: 'images/anthony.jpg' },
                { name: 'Andrea Bargnani', position: 'PF', team: 'New York Knicks', age: 29, points: 14.8, rebounds: 4.4, assists: 1.6, steals: 0.3, turnovers: 1.4, fouls: 2.2, salary: 11500000, quality: 'X', offense: 180, defense: 172, image: 'images/bargnani.jpg' },
                { name: 'Cole Aldrich', position: 'C', team: 'New York Knicks', age: 26, points: 5.5, rebounds: 5.5, assists: 1.2, steals: 0.7, turnovers: 1.1, fouls: 2.7, salary: 981084, quality: 'X', offense: 172, defense: 178, image: 'images/aldrich.jpg' },
                { name: 'Langston Galloway', position: 'PG', team: 'New York Knicks', age: 23, points: 11.8, rebounds: 4.2, assists: 3.3, steals: 1.2, turnovers: 1.6, fouls: 1.7, salary: 845059, quality: 'X', offense: 178, defense: 175, image: 'images/galloway.jpg' },
                { name: 'Jason Smith', position: 'PF', team: 'New York Knicks', age: 28, points: 8.0, rebounds: 4.0, assists: 1.7, steals: 0.3, turnovers: 0.9, fouls: 2.6, salary: 3278000, quality: 'X', offense: 175, defense: 175, image: 'images/smith.jpg' },
                { name: 'Shane Larkin', position: 'PG', team: 'New York Knicks', age: 22, points: 6.2, rebounds: 2.3, assists: 3.0, steals: 1.2, turnovers: 1.4, fouls: 1.6, salary: 1606080, quality: 'X', offense: 172, defense: 175, image: 'images/larkin.jpg' }
            ]
        },
        {
            name: 'Charlotte Hornets',
            players: [
                { name: 'Kemba Walker', position: 'PG', team: 'Charlotte Hornets', age: 24, points: 17.3, rebounds: 3.5, assists: 5.1, steals: 1.4, turnovers: 1.6, fouls: 1.6, salary: 12000000, quality: 'X', offense: 185, defense: 182, image: 'images/walker.jpg' },
                { name: 'Gerald Henderson', position: 'SG', team: 'Charlotte Hornets', age: 27, points: 12.1, rebounds: 3.4, assists: 2.6, steals: 0.6, turnovers: 1.4, fouls: 1.8, salary: 6000000, quality: 'X', offense: 178, defense: 178, image: 'images/henderson.jpg' },
                { name: 'Michael Kidd-Gilchrist', position: 'SF', team: 'Charlotte Hornets', age: 21, points: 10.9, rebounds: 7.6, assists: 1.4, steals: 0.5, turnovers: 1.3, fouls: 2.1, salary: 5016960, quality: 'X', offense: 175, defense: 185, image: 'images/kidd-gilchrist.jpg' },
                { name: 'Marvin Williams', position: 'PF', team: 'Charlotte Hornets', age: 28, points: 7.4, rebounds: 4.9, assists: 1.3, steals: 0.7, turnovers: 0.8, fouls: 1.8, salary: 7000000, quality: 'X', offense: 175, defense: 178, image: 'images/williams.jpg' },
                { name: 'Al Jefferson', position: 'C', team: 'Charlotte Hornets', age: 30, points: 16.6, rebounds: 8.4, assists: 1.7, steals: 0.7, turnovers: 1.5, fouls: 2.2, salary: 13500000, quality: 'X', offense: 185, defense: 180, image: 'images/jefferson.jpg' },
                { name: 'Mo Williams', position: 'PG', team: 'Charlotte Hornets', age: 32, points: 14.2, rebounds: 2.6, assists: 6.2, steals: 0.7, turnovers: 2.4, fouls: 1.5, salary: 3750000, quality: 'X', offense: 180, defense: 172, image: 'images/mwilliams.jpg' },
                { name: 'Cody Zeller', position: 'PF', team: 'Charlotte Hornets', age: 22, points: 7.6, rebounds: 5.8, assists: 1.6, steals: 0.5, turnovers: 1.1, fouls: 2.8, salary: 4030560, quality: 'X', offense: 175, defense: 180, image: 'images/zeller.jpg' },
                { name: 'Lance Stephenson', position: 'SG', team: 'Charlotte Hornets', age: 24, points: 8.2, rebounds: 4.5, assists: 3.9, steals: 0.6, turnovers: 1.7, fouls: 1.8, salary: 9000000, quality: 'X', offense: 175, defense: 180, image: 'images/stephenson.jpg' }
            ]
        },
        {
            name: 'Los Angeles Lakers',
            players: [
                { name: 'Jordan Clarkson', position: 'PG', team: 'Los Angeles Lakers', age: 22, points: 11.9, rebounds: 3.2, assists: 3.5, steals: 0.9, turnovers: 1.6, fouls: 1.8, salary: 507336, quality: 'X', offense: 178, defense: 175, image: 'images/clarkson.jpg' },
                { name: 'Wayne Ellington', position: 'SG', team: 'Los Angeles Lakers', age: 27, points: 10.0, rebounds: 3.2, assists: 1.6, steals: 0.5, turnovers: 0.9, fouls: 1.4, salary: 1063384, quality: 'X', offense: 175, defense: 172, image: 'images/ellington.jpg' },
                { name: 'Kobe Bryant', position: 'SG', team: 'Los Angeles Lakers', age: 36, points: 22.3, rebounds: 5.7, assists: 5.6, steals: 1.3, turnovers: 3.7, fouls: 2.0, salary: 23500000, quality: 'X', offense: 188, defense: 180, image: 'images/bryant.jpg' },
                { name: 'Carlos Boozer', position: 'PF', team: 'Los Angeles Lakers', age: 33, points: 11.8, rebounds: 6.8, assists: 1.3, steals: 0.6, turnovers: 1.4, fouls: 2.1, salary: 13550000, quality: 'X', offense: 178, defense: 175, image: 'images/boozer.jpg' },
                { name: 'Jordan Hill', position: 'C', team: 'Los Angeles Lakers', age: 27, points: 12.0, rebounds: 7.9, assists: 1.5, steals: 0.4, turnovers: 1.3, fouls: 2.7, salary: 9000000, quality: 'X', offense: 178, defense: 180, image: 'images/hill.jpg' },
                { name: 'Jeremy Lin', position: 'PG', team: 'Los Angeles Lakers', age: 26, points: 11.2, rebounds: 2.6, assists: 4.6, steals: 1.1, turnovers: 2.2, fouls: 2.0, salary: 14898938, quality: 'X', offense: 178, defense: 175, image: 'images/lin.jpg' },
                { name: 'Ed Davis', position: 'PF', team: 'Los Angeles Lakers', age: 25, points: 8.3, rebounds: 7.6, assists: 1.2, steals: 0.7, turnovers: 1.1, fouls: 2.3, salary: 981084, quality: 'X', offense: 175, defense: 180, image: 'images/davis.jpg' },
                { name: 'Nick Young', position: 'SF', team: 'Los Angeles Lakers', age: 29, points: 13.4, rebounds: 2.3, assists: 1.0, steals: 0.6, turnovers: 1.0, fouls: 1.7, salary: 4994420, quality: 'X', offense: 180, defense: 172, image: 'images/young.jpg' }
            ]
        },
        {
            name: 'Dream Team I ',
            players: [
                { name: 'Chris Paul', position: 'PG', team: 'LAC', age: 22, points: 23.4, rebounds: 3.2, assists: 11.5, steals: 0.9, turnovers: 1.6, fouls: 1.8, salary: 507336, quality: 'X', offense: 210, defense: 175, image: 'images/ChrisPaul.jpg' },
                { name: 'Wayne Ellington', position: 'SG', team: 'Los Angeles Lakers', age: 27, points: 10.0, rebounds: 3.2, assists: 1.6, steals: 0.5, turnovers: 0.9, fouls: 1.4, salary: 1063384, quality: 'X', offense: 175, defense: 172, image: 'images/ellington.jpg' },
                { name: 'Kobe Bryant', position: 'SG', team: 'Los Angeles Lakers', age: 36, points: 22.3, rebounds: 5.7, assists: 5.6, steals: 1.3, turnovers: 3.7, fouls: 2.0, salary: 23500000, quality: 'X', offense: 235, defense: 170, image: 'images/bryant.jpg' },
                { name: 'Carlos Boozer', position: 'PF', team: 'Los Angeles Lakers', age: 33, points: 11.8, rebounds: 6.8, assists: 1.3, steals: 0.6, turnovers: 1.4, fouls: 2.1, salary: 13550000, quality: 'X', offense: 178, defense: 175, image: 'images/boozer.jpg' },
                { name: 'Dwight Howard', position: 'C', team: 'Los Angeles Lakers', age: 27, points: 29.0, rebounds: 11.9, assists: 1.5, steals: 0.4, turnovers: 1.3, fouls: 2.7, salary: 9000000, quality: 'X', offense: 178, defense: 220, image: 'images/hill.jpg' },
                { name: 'Jeremy Lin', position: 'PG', team: 'Los Angeles Lakers', age: 26, points: 11.2, rebounds: 2.6, assists: 4.6, steals: 1.1, turnovers: 2.2, fouls: 2.0, salary: 14898938, quality: 'X', offense: 178, defense: 175, image: 'images/lin.jpg' },
                { name: 'Dirk Nowitzki', position: 'PF', team: 'Dallas Mavericks', age: 25, points: 28.3, rebounds: 7.6, assists: 1.2, steals: 0.7, turnovers: 1.1, fouls: 2.3, salary: 981084, quality: 'X', offense: 225, defense: 180, image: 'images/davis.jpg' },
                { name: 'Lebron James', position: 'SF', team: 'Miami Heat', age: 29, points: 23.4, rebounds: 8.3, assists: 7.0, steals: 0.6, turnovers: 1.0, fouls: 1.7, salary: 4994420, quality: 'X', offense: 220, defense: 192, image: 'images/young.jpg' }
            ]
        },
        {
            name: 'Dream Team II ',
            players: [
                { name: 'Magic Johnson', position: 'PG', team: 'LAC', age: 22, points: 25.8, rebounds: 3.2, assists: 12.5, steals: 0.9, turnovers: 1.6, fouls: 1.8, salary: 507336, quality: 'X', offense: 230, defense: 175, image: 'images/ChrisPaul.jpg' },
                { name: 'Wayne Ellington', position: 'SG', team: 'Los Angeles Lakers', age: 27, points: 10.0, rebounds: 3.2, assists: 1.6, steals: 0.5, turnovers: 0.9, fouls: 1.4, salary: 1063384, quality: 'X', offense: 175, defense: 172, image: 'images/ellington.jpg' },
                { name: 'Stephen Curry', position: 'SG', team: 'Los Angeles Lakers', age: 36, points: 29.3, rebounds: 5.7, assists: 5.6, steals: 1.3, turnovers: 3.7, fouls: 2.0, salary: 23500000, quality: 'X', offense: 260, defense: 170, image: 'images/bryant.jpg' },
                { name: 'Carlos Boozer', position: 'PF', team: 'Los Angeles Lakers', age: 33, points: 11.8, rebounds: 6.8, assists: 1.3, steals: 0.6, turnovers: 1.4, fouls: 2.1, salary: 13550000, quality: 'X', offense: 178, defense: 175, image: 'images/boozer.jpg' },
                { name: 'Shaquille O\'Neal', position: 'C', team: 'Los Angeles Lakers', age: 29, points: 29.2, rebounds: 14.9, assists: 1.5, steals: 0.4, turnovers: 1.3, fouls: 2.7, salary: 9000000, quality: 'X', offense: 238, defense: 250, image: 'images/hill.jpg' },
                { name: 'Jeremy Lin', position: 'PG', team: 'Los Angeles Lakers', age: 26, points: 11.2, rebounds: 2.6, assists: 4.6, steals: 1.1, turnovers: 2.2, fouls: 2.0, salary: 14898938, quality: 'X', offense: 178, defense: 175, image: 'images/lin.jpg' },
                { name: 'Anthony Davis', position: 'PF', team: 'Dallas Mavericks', age: 25, points: 28.3, rebounds: 11.6, assists: 1.2, steals: 0.7, turnovers: 1.1, fouls: 2.3, salary: 981084, quality: 'X', offense: 225, defense: 220, image: 'images/davis.jpg' },
                { name: 'Kawhi Leonard', position: 'SF', team: 'Miami Heat', age: 29, points: 29.4, rebounds: 6.3, assists: 4.0, steals: 0.6, turnovers: 1.0, fouls: 1.7, salary: 4994420, quality: 'X', offense: 230, defense: 220, image: 'images/young.jpg' }
            ]
        },
        {
            name: 'Dream Team III ',
            players: [
                { name: 'Stephen Curry', position: 'PG', team: 'LAC', age: 22, points: 31.8, rebounds: 6.2, assists: 7.5, steals: 0.9, turnovers: 1.6, fouls: 1.8, salary: 507336, quality: 'X', offense: 290, defense: 175, image: 'images/ChrisPaul.jpg' },
                { name: 'Wayne Ellington', position: 'SG', team: 'Los Angeles Lakers', age: 27, points: 10.0, rebounds: 3.2, assists: 1.6, steals: 0.5, turnovers: 0.9, fouls: 1.4, salary: 1063384, quality: 'X', offense: 175, defense: 172, image: 'images/ellington.jpg' },
                { name: 'Jhames Harden', position: 'SG', team: 'Los Angeles Lakers', age: 36, points: 33.3, rebounds: 5.7, assists: 5.6, steals: 1.3, turnovers: 3.7, fouls: 2.0, salary: 23500000, quality: 'X', offense: 297, defense: 170, image: 'images/bryant.jpg' },
                { name: 'Carlos Boozer', position: 'PF', team: 'Los Angeles Lakers', age: 33, points: 11.8, rebounds: 6.8, assists: 1.3, steals: 0.6, turnovers: 1.4, fouls: 2.1, salary: 13550000, quality: 'X', offense: 178, defense: 175, image: 'images/boozer.jpg' },
                { name: 'Tim Duncan', position: 'C', team: 'Los Angeles Lakers', age: 29, points: 24.2, rebounds: 13.9, assists: 1.5, steals: 0.4, turnovers: 1.3, fouls: 2.7, salary: 9000000, quality: 'X', offense: 238, defense: 290, image: 'images/hill.jpg' },
                { name: 'Jeremy Lin', position: 'PG', team: 'Los Angeles Lakers', age: 26, points: 11.2, rebounds: 2.6, assists: 4.6, steals: 1.1, turnovers: 2.2, fouls: 2.0, salary: 14898938, quality: 'X', offense: 178, defense: 175, image: 'images/lin.jpg' },
                { name: 'Demarcus Cousins', position: 'PF', team: 'Dallas Mavericks', age: 25, points: 28.3, rebounds: 13.6, assists: 1.2, steals: 0.7, turnovers: 1.1, fouls: 2.3, salary: 981084, quality: 'X', offense: 275, defense: 270, image: 'images/davis.jpg' },
                { name: 'Tracy McGrady', position: 'SF', team: 'Miami Heat', age: 29, points: 34.4, rebounds: 6.3, assists: 4.0, steals: 0.6, turnovers: 1.0, fouls: 1.7, salary: 4994420, quality: 'X', offense: 330, defense: 220, image: 'images/young.jpg' }
            ]
        },
        {
            name: 'Hall of Fame',
            players: [
                { name: 'Kaan Pomakoğlu', position: 'PG', team: 'LAC', age: 22, points: 18.8, rebounds: 6.2, assists: 14.5, steals: 2.9, turnovers: 1.6, fouls: 1.8, salary: 507336, quality: 'X', offense: 490, defense: 375, image: 'images/ChrisPaul.jpg' },
                { name: 'Wayne Ellington', position: 'SG', team: 'Los Angeles Lakers', age: 27, points: 10.0, rebounds: 3.2, assists: 1.6, steals: 0.5, turnovers: 0.9, fouls: 1.4, salary: 1063384, quality: 'X', offense: 175, defense: 172, image: 'images/ellington.jpg' },
                { name: 'Ömer Atun', position: 'SG', team: 'Los Angeles Lakers', age: 36, points: 21.3, rebounds: 7.7, assists: 5.6, steals: 4.3, turnovers: 3.7, fouls: 2.0, salary: 23500000, quality: 'X', offense: 317, defense: 470, image: 'images/bryant.jpg' },
                { name: 'Carlos Boozer', position: 'PF', team: 'Los Angeles Lakers', age: 33, points: 11.8, rebounds: 6.8, assists: 1.3, steals: 0.6, turnovers: 1.4, fouls: 2.1, salary: 13550000, quality: 'X', offense: 178, defense: 175, image: 'images/boozer.jpg' },
                { name: 'Yunus Emre Hamatoğlu', position: 'C', team: 'Los Angeles Lakers', age: 29, points: 19.2, rebounds: 14.9, assists: 1.5, steals: 0.4, turnovers: 1.3, fouls: 2.7, salary: 9000000, quality: 'X', offense: 338, defense: 690, image: 'images/hill.jpg' },
                { name: 'Jeremy Lin', position: 'PG', team: 'Los Angeles Lakers', age: 26, points: 11.2, rebounds: 2.6, assists: 4.6, steals: 1.1, turnovers: 2.2, fouls: 2.0, salary: 14898938, quality: 'X', offense: 178, defense: 175, image: 'images/lin.jpg' },
                { name: 'Sinan Emre Bitim', position: 'PF', team: 'Dallas Mavericks', age: 25, points: 18.3, rebounds: 15.6, assists: 1.2, steals: 0.7, turnovers: 1.1, fouls: 2.3, salary: 981084, quality: 'X', offense: 275, defense: 670, image: 'images/davis.jpg' },
                { name: 'Önder Atun', position: 'SF', team: 'Miami Heat', age: 29, points: 28.4, rebounds: 6.3, assists: 4.0, steals: 2.6, turnovers: 1.0, fouls: 1.7, salary: 4994420, quality: 'X', offense: 550, defense: 520, image: 'images/young.jpg' }
            ]
        }
    ];
    // ... diğer takımlar


// Kalite değerleri için sabitler
const qualityLevels = {
    'S+': { minOffense: 85, minDefense: 85 },
    'S': { minOffense: 80, minDefense: 80 },
    'S-': { minOffense: 75, minDefense: 75 },
    // ... diğer kalite seviyeleri
};  