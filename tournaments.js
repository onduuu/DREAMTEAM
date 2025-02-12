// Global tournament değişkenini tanımla
let tournament;
let tournamentManager;

// Turnuva Yönetimi Sınıfı
class TournamentManager {
    constructor() {
        this.currentTournament = null;
        this.matches = [];
        this.collectionTimes = new Map(); // Her takım için son toplama zamanını tutacak
        // Kayıtlı toplama zamanlarını yükle
        const savedTimes = localStorage.getItem('collectionTimes');
        if (savedTimes) {
            this.collectionTimes = new Map(JSON.parse(savedTimes));
        }
    }

    // Turnuva ile ilgili metodlar
    initializeTournament(type) {
        this.currentTournament = new Tournament(type);
        return this.currentTournament;
    }

    displayLeagueSchedule(teams) {
        const matchScreen = document.getElementById('match-screen');
        if (!matchScreen) return;

        matchScreen.style.display = 'block';
        document.getElementById('tournament-selection').style.display = 'none';

        // Takım listesini oluştur
        const teamListHTML = teams.map((team, index) => `
            <div class="team-row">
                <div class="team-rank">${index + 1}</div>
                <div class="team-info">
                    <div class="team-name">${team.name}</div>
                    <div class="team-power">Güç: ${team.power}</div>
                </div>
                <div class="team-actions">
                    <button class="collect-button" data-team="${team.name}">
                        <i class="fas fa-coins"></i> Topla
                    </button>
                    <button class="play-button" data-team="${team.name}">
                        <i class="fas fa-play"></i> Oyna
                    </button>
                </div>
            </div>
        `).join('');

        matchScreen.innerHTML = `
            <div class="league-schedule">
                <h2>Türkiye Ligi 2023-2024 Sezonu</h2>
                <div class="team-list">
                    ${teamListHTML}
                </div>
            </div>
        `;

        // Event listener'ları ekle
        this.addButtonListeners();
        this.updateCollectButtons();
    }

    addButtonListeners() {
        document.querySelectorAll('.play-button').forEach(button => {
            button.addEventListener('click', (e) => {
                const teamName = e.currentTarget.dataset.team;
                this.startMatch('MyTeam', teamName);
            });
        });

        document.querySelectorAll('.collect-button').forEach(button => {
            button.addEventListener('click', (e) => {
                const teamName = e.currentTarget.dataset.team;
                console.log(`${teamName} için toplama işlemi başlatıldı`);
                e.currentTarget.disabled = true;
            });
        });
    }

    // Turnuva ödülünü toplama metodu
    collectReward(teamName) {
        // Sabit ödüller
        const moneyReward = 100000;
        const xpReward = 25; // XP ödülünü 25'e düşürdük

        // Para ödülünü ver
        money += moneyReward;
        
        // XP ödülünü ver ve hemen güncelle
        let currentXP = parseInt(localStorage.getItem('playerXP')) || 0;
        let currentLevel = parseInt(localStorage.getItem('playerLevel')) || 1;
        
        currentXP += xpReward;
        localStorage.setItem('playerXP', currentXP);
        
        // XP barını hemen güncelle
        const xpForNextLevel = currentLevel * 100;
        const levelContainer = document.querySelector('.level-container');
        if (levelContainer) {
            const xpBar = levelContainer.querySelector('.xp-bar-fill');
            const xpText = levelContainer.querySelector('.xp-text');
            const levelText = levelContainer.querySelector('.level-text');
            
            const xpProgress = (currentXP % xpForNextLevel) / xpForNextLevel * 100;
            
            if (xpBar) xpBar.style.width = `${xpProgress}%`;
            if (xpText) xpText.textContent = `${currentXP % xpForNextLevel}/${xpForNextLevel} XP`;
            if (levelText) levelText.textContent = `Level ${currentLevel}`;
        }
        
        // Level atlama kontrolü
        if (currentXP >= xpForNextLevel) {
            currentLevel++;
            localStorage.setItem('playerLevel', currentLevel);
            showNotification(`Tebrikler! Level ${currentLevel} oldunuz!`, 'success');
        }
        
        // Güncellemeleri kaydet
        saveGame();
        updateMoneyDisplay();

        // Bildirim göster
        if (typeof showNotification === 'function') {
            showNotification(`${moneyReward}$ ve ${xpReward} XP kazandınız!`, 'success');
        } else {
            alert(`${moneyReward}$ ve ${xpReward} XP kazandınız!`);
        }

        // Toplama butonunu devre dışı bırak
        const button = document.querySelector(`.collect-button[data-team="${teamName}"]`);
        if (button) {
            button.disabled = true;
            button.innerHTML = '<i class="fas fa-check"></i> Toplandı';
        }
    }

    // XP barını güncelleyen yeni metod
    updateXPBar(currentXP, currentLevel) {
        const levelContainer = document.querySelector('.level-container');
        if (!levelContainer) return;

        const xpBar = levelContainer.querySelector('.xp-bar-fill');
        const xpText = levelContainer.querySelector('.xp-text');
        const levelText = levelContainer.querySelector('.level-text');
        
        const xpForNextLevel = currentLevel * 100;
        const xpProgress = (currentXP % xpForNextLevel) / xpForNextLevel * 100;
        
        if (xpBar) xpBar.style.width = `${xpProgress}%`;
        if (xpText) xpText.textContent = `${currentXP % xpForNextLevel}/${xpForNextLevel} XP`;
        if (levelText) levelText.textContent = `Level ${currentLevel}`;
    }

    // Level kontrolü ve güncelleme
    checkAndUpdateLevel(currentXP, currentLevel) {
        const xpForNextLevel = currentLevel * 100;
        if (currentXP >= xpForNextLevel) {
            currentLevel++;
            localStorage.setItem('playerLevel', currentLevel);
            showNotification(`Tebrikler! Level ${currentLevel} oldunuz!`, 'success');
            this.updateXPBar(currentXP, currentLevel);
        }
    }

    // Ödül miktarını hesaplama metodu
    calculateReward(teamName) {
        // Takımı bul
        const team = teams.find(t => t.name === teamName);
        if (!team) return 1000; // Takım bulunamazsa default değer

        // Takımın gücüne göre ödül hesapla
        const baseReward = 1000;
        const powerMultiplier = team.power / 50; // Güç değeri 50'ye bölünerek çarpan elde edilir
        
        // Ödülü hesapla ve yuvarla
        const reward = Math.round(baseReward * powerMultiplier);
        
        // Minimum ve maximum değerler
        const minReward = 500;
        const maxReward = 5000;
        
        // Ödülü sınırlar içinde tut
        return Math.min(Math.max(reward, minReward), maxReward);
    }

    // Toplama butonlarının durumunu güncelleme
    updateCollectButtons() {
        const buttons = document.querySelectorAll('.collect-button');
        const now = Date.now();
        
        buttons.forEach(button => {
            const teamName = button.dataset.team;
            const lastCollection = this.collectionTimes.get(teamName) || 0;
            const cooldownPeriod = 24 * 60 * 60 * 1000;
            
            if (now - lastCollection < cooldownPeriod) {
                button.disabled = true;
                const remainingTime = cooldownPeriod - (now - lastCollection);
                const remainingHours = Math.ceil(remainingTime / (60 * 60 * 1000));
                button.title = `${remainingHours} saat sonra tekrar toplanabilir`;
            } else {
                button.disabled = false;
                button.title = 'Ödülü topla';
            }
        });
    }
}

// Maç Yönetimi Sınıfı
class MatchManager {
    constructor(homeTeam, awayTeam) {
        this.homeTeam = homeTeam;
        this.awayTeam = awayTeam;
        this.score = { home: 0, away: 0 };
        this.quarter = 1;
        this.timeLeft = 600; // 10 dakika
    }

    // Maç akışı metodları
    simulateQuarter() { }
    calculatePossession() { }
    updateScore() { }
}

class Tournament {
    constructor(type) {
        this.type = type;
        this.fixtures = [];
        this.standings = [];
        this.currentRound = 0;
        
        // Maç durumu
        this.matchState = {
            isPlaying: false,
            homeScore: 0,
            awayScore: 0,
            quarter: 1,
            timeLeft: 600, // 10 dakika
            possession: 'home',
            gameSpeed: 1000 // Normal hız (1 saniye)
        };

        // MyTeam verilerini yükle
        this.myTeamData = JSON.parse(localStorage.getItem('myTeam')) || [];
        this.myFive = this.getMyTeamStartingFive();
        
        // Oyuncu enerji durumlarını başlat
        this.playerEnergies = {
            home: {
                PG: 100, SG: 100, SF: 100, PF: 100, C: 100
            },
            away: {
                PG: 100, SG: 100, SF: 100, PF: 100, C: 100
            }
        };

        // Oyuncuların oynadığı süreleri takip et
        this.playerMinutes = {
            home: {
                PG: 0, SG: 0, SF: 0, PF: 0, C: 0
            },
            away: {
                PG: 0, SG: 0, SF: 0, PF: 0, C: 0
            }
        };

        // Taktik ayarları
        this.tactics = {
            offense: {
                current: 'balanced',
                multipliers: {
                    PG: 1.0,
                    SG: 1.0,
                    SF: 1.0,
                    PF: 1.0,
                    C: 1.0
                }
            },
            defense: {
                current: 'man_to_man',
                multipliers: {
                    PG: 1.0,
                    SG: 1.0,
                    SF: 1.0,
                    PF: 1.0,
                    C: 1.0
                }
            }
        };

        // Taktik setleri
        this.tacticSets = {
            offense: {
                balanced: {
                    name: 'Dengeli Hücum',
                    description: 'Standart hücum düzeni',
                    multipliers: { PG: 1.0, SG: 1.0, SF: 1.0, PF: 1.0, C: 1.0 }
                },
                run_and_gun: {
                    name: 'Hızlı Hücum',
                    description: 'Dış oyuncularla hızlı hücum',
                    multipliers: { PG: 1.2, SG: 1.2, SF: 1.2, PF: 0.8, C: 0.8 }
                },
                post_up: {
                    name: 'Post Oyunu',
                    description: 'Pota altı oyuncuları üzerinden hücum',
                    multipliers: { PG: 0.8, SG: 0.8, SF: 0.9, PF: 1.2, C: 1.2 }
                },
                pick_and_roll: {
                    name: 'Pick & Roll',
                    description: 'PG ve C ikilisi üzerinden hücum',
                    multipliers: { PG: 1.2, SG: 0.9, SF: 0.9, PF: 0.9, C: 1.2 }
                }
            },
            defense: {
                man_to_man: {
                    name: 'Adam Adama',
                    description: 'Standart savunma düzeni',
                    multipliers: { PG: 1.0, SG: 1.0, SF: 1.0, PF: 1.0, C: 1.0 }
                },
                full_court_press: {
                    name: 'Tam Saha Baskı',
                    description: 'Rakip dış oyuncularına baskı yaparak yorma taktiği',
                    multipliers: { 
                        PG: 0.8,  // Rakip PG'yi baskıla
                        SG: 0.8,  // Rakip SG'yi baskıla
                        SF: 0.9,  // Rakip SF'yi hafif baskıla
                        PF: 1.25, // Değiştirildi: 1.2 -> 1.25 (Daha verimli)
                        C: 1.25   // Değiştirildi: 1.2 -> 1.25 (Daha verimli)
                    },
                    opponentFatigue: { 
                        PG: 1.5,  // Rakip PG daha hızlı yorulur
                        SG: 1.5,  // Rakip SG daha hızlı yorulur
                        SF: 1.2,  // Rakip SF biraz daha hızlı yorulur
                        PF: 1.0,  // Normal yorulma
                        C: 1.0    // Normal yorulma
                    }
                },
                zone_defense: {
                    name: 'Alan Savunması',
                    description: 'Pota altı oyuncularının etkisini azaltmaya yönelik savunma',
                    multipliers: { 
                        PG: 1.2,  // Dış oyuncular daha verimli
                        SG: 1.2,  // Dış oyuncular daha verimli
                        SF: 1.2,  // Dış oyuncular daha verimli
                        PF: 0.7,  // Pota altı oyuncusunu kısıtla
                        C: 0.7    // Pota altı oyuncusunu kısıtla
                    }
                },
                box_and_one: {
                    name: 'Box and One',
                    description: 'Rakip SG pozisyonundaki oyuncuya özel savunma',
                    multipliers: { 
                        PG: 1.2,  // Diğer oyuncular daha verimli
                        SG: 0.6,  // SG'yi etkisiz hale getir
                        SF: 1.2,  // Diğer oyuncular daha verimli
                        PF: 1.2,  // Diğer oyuncular daha verimli
                        C: 1.2    // Diğer oyuncular daha verimli
                    }
                }
            }
        };

        // Oyuncu istatistiklerini başlat - oyuncu ismine göre
        this.playerStats = {
            home: {},  // Her oyuncunun istatistikleri ismine göre tutulacak
            away: {}
        };

        // İlk 5'teki oyuncuların istatistiklerini başlat
        Object.values(this.myFive).forEach(player => {
            this.playerStats.home[player.name] = {
                points: 0,
                fgMade: 0,
                fgAttempts: 0,
                rebounds: 0,
                assists: 0,
                steals: 0,
                blocks: 0,
                turnovers: 0,
                fouls: 0
            };
        });

        // Yedek oyuncuların istatistiklerini başlat
        this.myTeamData.forEach(player => {
            if (!this.playerStats.home[player.name]) {
                this.playerStats.home[player.name] = {
                    points: 0,
                    fgMade: 0,
                    fgAttempts: 0,
                    rebounds: 0,
                    assists: 0,
                    steals: 0,
                    blocks: 0,
                    turnovers: 0,
                    fouls: 0
                };
            }
        });

        // Malzeme sistemi
        this.items = {
            water: {
                name: 'Su Şişesi',
                description: 'Oyuncuya 10 enerji kazandırır',
                image: 'images/kucuksu.png', // İkon yerine resim yolu
                effect: 10,
                count: 3
            }
        };
    }

    // Takımın güç seviyesini hesapla
    calculateTeamStrength(team) {
        if (!team || !team.players || team.players.length === 0) return 0;
        
        // Takımın en iyi 5 oyuncusunu al
        const bestPlayers = [...team.players]
            .sort((a, b) => {
                const strengthA = (a.offense + a.defense) / 2;
                const strengthB = (b.offense + b.defense) / 2;
                return strengthB - strengthA;
            })
            .slice(0, 5);
        
        // En iyi 5 oyuncunun ortalamasını hesapla
        const teamStrength = bestPlayers.reduce((total, player) => {
            const playerStrength = (player.offense + player.defense) / 2;
            return total + playerStrength;
        }, 0) / bestPlayers.length;

        // Yedek oyuncuların katkısını da ekle (daha düşük ağırlıkla)
        const benchPlayers = team.players.slice(5);
        const benchStrength = benchPlayers.length > 0 
            ? benchPlayers.reduce((total, player) => {
                const playerStrength = (player.offense + player.defense) / 2;
                return total + playerStrength;
              }, 0) / benchPlayers.length * 0.3 // Yedek oyuncuların etkisi %30
            : 0;

        return teamStrength + benchStrength;
    }

    // Takımları güç seviyesine göre sırala
    sortTeamsByStrength(teamsList) {
        if (!teamsList || !Array.isArray(teamsList)) {
            console.error('Geçerli takım listesi bulunamadı');
            return [];
        }

        return [...teamsList].sort((a, b) => {
            if (!a || !b || !a.players || !b.players) {
                console.error('Geçersiz takım formatı:', a, b);
                return 0;
            }
            const strengthA = this.calculateTeamStrength(a);
            const strengthB = this.calculateTeamStrength(b);
            return strengthA - strengthB; // Güçsüzden güçlüye sırala
        });
    }

    initializeLeague() {
        // window.teams'i kullan (data.js'den geliyor)
        if (!window.teams || window.teams.length === 0) {
            console.error('Takımlar yüklenemedi!');
            return;
        }

        const sortedTeams = this.sortTeamsByStrength(window.teams);
        this.displayLeagueSchedule(sortedTeams);
    }

    displayLeagueSchedule(sortedTeams) {
        const matchScreen = document.getElementById('match-screen');
        if (!matchScreen) {
            console.error('Match screen elementi bulunamadı!');
            return;
        }

        matchScreen.style.display = 'block';
        document.getElementById('tournament-selection').style.display = 'none';

        matchScreen.innerHTML = `
            <div class="league-schedule">
                <h2>Türkiye Ligi 2023-2024 Sezonu</h2>
                <div class="team-list">
                    ${sortedTeams.map((team, index) => `
                        <div class="team-row">
                            <div class="team-rank">${index + 1}</div>
                            <div class="team-info">
                                <div class="team-name">${team.name}</div>
                                <div class="team-strength">
                                    Güç: ${this.calculateTeamStrength(team).toFixed(1)}
                                </div>
                            </div>
                            <div class="team-actions">
                                <button class="collect-button" data-team="${team.name}">
                                    <i class="fas fa-coins"></i> Topla
                                </button>
                                <button class="play-button" data-team="${team.name}">
                                    <i class="fas fa-play"></i> Oyna
                                </button>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;

        // Event listener'ları ekle
        this.addButtonListeners();
        this.updateCollectButtons();
    }

    startMatch(opponentTeamName) {
        // Rakip takımı bul
        this.opponentTeam = window.teams.find(team => team.name === opponentTeamName);
        if (!this.opponentTeam) return;

        // Rakip takımın ilk 5'ini oluştur
        this.opponentFive = this.getBestFiveByPosition(this.opponentTeam.players);

        // MyTeam'den oyuncuların enerji seviyelerini al
        Object.entries(this.myFive).forEach(([position, player]) => {
            // MyTeam'deki oyuncuyu bul
            const myTeamPlayer = this.myTeamData.find(p => p.name === player.name);
            if (myTeamPlayer && myTeamPlayer.energy !== undefined) {
                // Oyuncunun enerji seviyesini güncelle
                this.playerEnergies.home[position] = myTeamPlayer.energy;
            }
        });

        // Maç durumunu başlat
        this.matchState.isPlaying = true;

        // Maç ekranını göster
        this.displayMatchScreen(
            this.myFive,
            this.opponentFive,
            'MYTEAM',
            opponentTeamName,
            this.myTeamData,
            this.opponentTeam
        );
    }

    getBestFiveByPosition(players) {
        const positions = ['PG', 'SG', 'SF', 'PF', 'C'];
        const bestFive = {};

        positions.forEach(pos => {
            // Her pozisyon için en iyi oyuncuyu bul
            const positionPlayers = players.filter(p => p && p.position === pos);
            
            if (positionPlayers.length > 0) {
                const bestPlayer = positionPlayers.sort((a, b) => {
                    const strengthA = (a.offense + a.defense) / 2;
                    const strengthB = (b.offense + b.defense) / 2;
                    return strengthB - strengthA;
                })[0];

                // Oyuncu verilerinin tam olduğundan emin ol
                if (bestPlayer) {
                    bestFive[pos] = {
                        name: bestPlayer.name || 'İsimsiz Oyuncu',
                        position: bestPlayer.position || pos,
                        offense: bestPlayer.offense || 50,
                        defense: bestPlayer.defense || 50,
                        image: bestPlayer.image || null,
                        // Diğer gerekli özellikleri ekle
                        team: bestPlayer.team || 'Bilinmeyen Takım',
                        age: bestPlayer.age || 25,
                        points: bestPlayer.points || 0,
                        rebounds: bestPlayer.rebounds || 0,
                        assists: bestPlayer.assists || 0
                    };
                }
            }
        });

        // Eksik pozisyonlar için varsayılan oyuncular oluştur
        positions.forEach(pos => {
            if (!bestFive[pos]) {
                bestFive[pos] = {
                    name: `Yedek ${pos}`,
                    position: pos,
                    offense: 50,
                    defense: 50,
                    image: null,
                    team: 'Yedek',
                    age: 25,
                    points: 0,
                    rebounds: 0,
                    assists: 0
                };
            }
        });

        return bestFive;
    }

    getMyTeamStartingFive() {
        const myTeamData = JSON.parse(localStorage.getItem('myTeam')) || [];
        const positions = ['PG', 'SG', 'SF', 'PF', 'C'];
        const startingFive = {};

        positions.forEach(pos => {
            // Her pozisyon için en iyi oyuncuyu bul
            const positionPlayers = myTeamData.filter(p => p.position === pos);
            if (positionPlayers.length > 0) {
                startingFive[pos] = positionPlayers[0]; // İlk oyuncuyu al
            }
        });

        // Tüm pozisyonlar dolu mu kontrol et
        return Object.keys(startingFive).length === 5 ? startingFive : null;
    }

    displayMatchScreen(myFive, opponentFive, homeTeamName, awayTeamName, myTeamData, opponentTeam) {
        const matchScreen = document.getElementById('match-screen');
        matchScreen.innerHTML = `
            <div class="match-container">
                <!-- Üst kısım - Skor ve Süre -->
                <div class="score-board">
                    <div class="team-score home">${this.matchState.homeScore}</div>
                    <div class="time-display">
                        <div class="quarter">${this.matchState.quarter}. Çeyrek</div>
                        <div class="time">${Math.floor(this.matchState.timeLeft / 60)}:${(this.matchState.timeLeft % 60).toString().padStart(2, '0')}</div>
                    </div>
                    <div class="team-score away">${this.matchState.awayScore}</div>
                </div>

                <!-- Orta kısım - Saha ve Oyuncular -->
                <div class="court-section">
                    <!-- Sol taraf (MyTeam) -->
                    <div class="team-side home">
                        <h3 class="team-name">${homeTeamName}</h3>
                        <div class="team-players">
                            ${Object.entries(myFive).map(([pos, player]) => `
                                ${this.createPlayerCard(player, pos, 'home', this.tactics)}
                            `).join('')}
                        </div>
                    </div>

                    <!-- Orta alan (Skor tablosu) -->
                    <div class="match-center">
                        <div class="score-display">
                            <div class="team-score home">${this.matchState.homeScore}</div>
                            <div class="time-display">
                                <div class="quarter">${this.matchState.quarter}. Çeyrek</div>
                                <div class="time">${Math.floor(this.matchState.timeLeft / 60)}:${(this.matchState.timeLeft % 60).toString().padStart(2, '0')}</div>
                            </div>
                            <div class="team-score away">${this.matchState.awayScore}</div>
                        </div>
                    </div>

                    <!-- Sağ taraf (Rakip takım) -->
                    <div class="team-side away">
                        <h3 class="team-name">${awayTeamName}</h3>
                        <div class="team-players">
                            ${Object.entries(opponentFive).map(([pos, player]) => `
                                ${this.createPlayerCard(player, pos, 'away', {
                                    offense: { multipliers: {} },  // Rakip takım için boş multiplier
                                    defense: {
                                        multipliers: Object.fromEntries(
                                            Object.entries(this.tactics.defense.multipliers).map(([p, v]) => [p, 2 - v])
                                            // Savunma etkisini tersine çevir: 1.2 -> 0.8, 0.8 -> 1.2
                                        )
                                    }
                                })}
                            `).join('')}
                        </div>
                    </div>
                </div>

                <!-- bottom-panels div'inden önce ekle -->
                <div class="start-match-container">
                    <button class="start-match-btn" onclick="tournament.startGameplay()">
                        <i class="fas fa-play"></i>
                        Maçı Başlat
                    </button>
                </div>

                <!-- Alt kısım - İstatistik ve Kontrol Panelleri -->
                <div class="bottom-panels">
                    <!-- İstatistik Paneli -->
                    <div class="stats-panel">
                        <div class="stats-header">
                            <div class="stats-tabs">
                                <button class="stats-tab active" data-tab="myteam">MyTeam Stats</button>
                                <button class="stats-tab" data-tab="full">
                                    Full Statistics
                                    <span class="full-stats-icon">📊</span>
                                </button>
                            </div>
                        </div>
                        <div class="stats-content">
                            <!-- MyTeam Stats (varsayılan görünüm) -->
                            <div class="stats-table-container myteam-stats active">
                                <table class="stats-table">
                                    <thead>
                                        <tr>
                                            <th>Player</th>
                                            <th>Stam</th>
                                            <th>FG</th>
                                            <th>REB</th>
                                            <th>AST</th>
                                            <th>STL</th>
                                            <th>BLK</th>
                                            <th>TO</th>
                                            <th>FL</th>
                                            <th>PTS</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        ${Object.entries(myFive).map(([pos, player]) => `
                                            <tr class="home-stats" data-player="${player.name}">
                                                <td>${player.name}</td>
                                                <td>${Math.round(this.playerEnergies.home[pos])}%</td>
                                                <td>0-0</td>
                                                <td>0</td>
                                                <td>0</td>
                                                <td>0</td>
                                                <td>0</td>
                                                <td>0</td>
                                                <td>0</td>
                                                <td>0</td>
                                            </tr>
                                        `).join('')}
                                    </tbody>
                                </table>
                            </div>
                            
                            <!-- Full Stats (başlangıçta gizli) -->
                            <div class="stats-table-container full-stats">
                                <table class="stats-table">
                                    <thead>
                                        <tr>
                                            <th>Player</th>
                                            <th>Stam</th>
                                            <th>FG</th>
                                            <th>REB</th>
                                            <th>AST</th>
                                            <th>STL</th>
                                            <th>BLK</th>
                                            <th>TO</th>
                                            <th>FL</th>
                                            <th>PTS</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <!-- MyTeam Stats -->
                                        <tr class="team-header"><td colspan="10">${homeTeamName}</td></tr>
                                        <!-- İlk 5'teki oyuncular -->
                                        ${Object.entries(myFive).map(([pos, player]) => `
                                            <tr class="home-stats starting" data-player="${player.name}">
                                                <td>
                                                    ${player.name}
                                                    <span class="player-role">(${pos})</span>
                                                </td>
                                                <td>${player.energy || 100}</td>
                                                <td>0-0</td>
                                                <td>0</td>
                                                <td>0</td>
                                                <td>0</td>
                                                <td>0</td>
                                                <td>0</td>
                                                <td>0</td>
                                            </tr>
                                        `).join('')}
                                        <!-- Yedek oyuncular -->
                                        ${myTeamData.filter(player => 
                                            !Object.values(myFive).some(starter => starter.name === player.name)
                                        ).map(player => `
                                            <tr class="home-stats bench" data-player="${player.name}">
                                                <td>
                                                    ${player.name}
                                                    <span class="player-role bench-label">(Yedek)</span>
                                                </td>
                                                <td>${player.energy || 100}</td>
                                                <td>-</td>
                                                <td>-</td>
                                                <td>-</td>
                                                <td>-</td>
                                                <td>-</td>
                                                <td>-</td>
                                                <td>-</td>
                                            </tr>
                                        `).join('')}

                                        <!-- Away Team Stats -->
                                        <tr class="team-header"><td colspan="10">${awayTeamName}</td></tr>
                                        <!-- İlk 5'teki oyuncular -->
                                        ${Object.entries(opponentFive).map(([pos, player]) => `
                                            <tr class="away-stats starting" data-player="${player.name}">
                                                <td>
                                                    ${player.name}
                                                    <span class="player-role">(${pos})</span>
                                                </td>
                                                <td>${player.energy || 100}</td>
                                                <td>0-0</td>
                                                <td>0</td>
                                                <td>0</td>
                                                <td>0</td>
                                                <td>0</td>
                                                <td>0</td>
                                                <td>0</td>
                                            </tr>
                                        `).join('')}
                                        <!-- Yedek oyuncular -->
                                        ${opponentTeam.players.filter(player => 
                                            !Object.values(opponentFive).some(starter => starter.name === player.name)
                                        ).map(player => `
                                            <tr class="away-stats bench">
                                                <td>
                                                    ${player.name}
                                                    <span class="player-role bench-label">(Yedek)</span>
                                                </td>
                                                <td>${player.energy || 100}</td>
                                                <td>-</td>
                                                <td>-</td>
                                                <td>-</td>
                                                <td>-</td>
                                                <td>-</td>
                                                <td>-</td>
                                                <td>-</td>
                                            </tr>
                                        `).join('')}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                    <!-- Kontrol Paneli -->
                    <div class="match-controls">
                        <div class="control-buttons">
                            <button class="control-btn substitution-btn" onclick="tournament.handleSubstitution()">
                                <i class="fas fa-exchange-alt"></i>
                                <span>Oyuncu Değişikliği</span>
                            </button>

                            <button class="control-btn tactics-btn" onclick="tournament.handleTactics()">
                                <i class="fas fa-clipboard-list"></i>
                                <span>Taktik</span>
                            </button>

                            <button class="control-btn timeout-btn" onclick="tournament.handleTimeout()">
                                <i class="fas fa-pause-circle"></i>
                                <span>Mola Al</span>
                            </button>

                            <button class="control-btn items-btn" onclick="tournament.handleItems()">
                                <i class="fas fa-medkit"></i>
                                <span>Malzemeler</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        `;

        const statsTabButtons = document.querySelectorAll('.stats-tab');
        statsTabButtons.forEach(button => {
            button.addEventListener('click', () => {
                // Aktif tab'ı değiştir
                statsTabButtons.forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');
                
                // İlgili içeriği göster
                const tabType = button.dataset.tab;
                document.querySelectorAll('.stats-table-container').forEach(container => {
                    container.classList.remove('active');
                });
                document.querySelector(`.${tabType}-stats`).classList.add('active');
            });
        });
    }

    // Oyuncu istatistiklerini güncelle
    updatePlayerStats(team, position, stats) {
        const players = team === 'home' ? this.myFive : this.opponentFive;
        const playerName = players[position].name;

        if (!this.playerStats[team][playerName]) {
            this.playerStats[team][playerName] = {
                points: 0,
                fgMade: 0,
                fgAttempts: 0,
                rebounds: 0,
                assists: 0,
                steals: 0,
                blocks: 0,
                turnovers: 0,
                fouls: 0
            };
        }

        // İstatistikleri güncelle
        Object.entries(stats).forEach(([stat, value]) => {
            this.playerStats[team][playerName][stat] += value;
        });

        // İstatistik panelini güncelle
        this.updateStatsDisplay();
    }

    // İstatistik panelini güncelle
    updateStatsDisplay() {
        ['home', 'away'].forEach(team => {
            // Sahada olan oyuncuların istatistiklerini güncelle
            Object.entries(team === 'home' ? this.myFive : this.opponentFive).forEach(([position, player]) => {
                const stats = this.playerStats[team][player.name] || {
                    points: 0, fgMade: 0, fgAttempts: 0, rebounds: 0,
                    assists: 0, steals: 0, blocks: 0, turnovers: 0, fouls: 0
                };

                // Normal ve full istatistik panellerini güncelle
                ['.stats-table tr', '.full-stats tr'].forEach(selector => {
                    const statRow = document.querySelector(`${selector}[data-player="${player.name}"]`);
                    if (statRow) {
                        statRow.innerHTML = `
                            <td>${player.name}</td>
                            <td>${Math.round(this.playerEnergies[team][position])}%</td>
                            <td>${stats.fgMade}-${stats.fgAttempts}</td>
                            <td>${stats.rebounds}</td>
                            <td>${stats.assists}</td>
                            <td>${stats.steals}</td>
                            <td>${stats.blocks}</td>
                            <td>${stats.turnovers}</td>
                            <td>${stats.fouls}</td>
                            <td>${stats.points}</td>
                        `;
                    }
                });
            });

            // Yedek oyuncuların istatistiklerini güncelle
            if (team === 'home') {
                const benchPlayers = this.myTeamData.filter(player => 
                    !Object.values(this.myFive).some(starter => starter.name === player.name)
                );

                benchPlayers.forEach(player => {
                    const benchStats = this.playerStats.home[player.name] || {
                        points: 0, fgMade: 0, fgAttempts: 0, rebounds: 0,
                        assists: 0, steals: 0, blocks: 0, turnovers: 0, fouls: 0
                    };

                    const benchRow = document.querySelector(`.full-stats tr[data-player="${player.name}"]`);
                    if (benchRow) {
                        benchRow.innerHTML = `
                            <td>
                                ${player.name}
                                <span class="player-role bench-label">(Yedek)</span>
                            </td>
                            <td>${player.energy || 100}%</td>
                            <td>${benchStats.fgMade}-${benchStats.fgAttempts}</td>
                            <td>${benchStats.rebounds}</td>
                            <td>${benchStats.assists}</td>
                            <td>${benchStats.steals}</td>
                            <td>${benchStats.blocks}</td>
                            <td>${benchStats.turnovers}</td>
                            <td>${benchStats.fouls}</td>
                            <td>${benchStats.points}</td>
                        `;
                    }
                });
            }
        });
    }

    runMatch(myFive, opponentFive) {
        // Takımları kaydet
        this.myFive = myFive;
        this.opponentFive = opponentFive;

        // DOM elementlerini sınıf özellikleri olarak kaydet
        this.homeScoreElement = document.querySelector('.team-score .score');
        this.awayScoreElement = document.querySelectorAll('.team-score .score')[1];
        this.gameTimeElement = document.querySelector('.game-time');
        this.quarterDisplay = document.querySelector('.quarter-display');

        this.matchState = {
            quarter: 1,
            quarterTime: 600,
            homeScore: 0,
            awayScore: 0,
            isPlaying: true,
            possessionTime: 24,
            possession: 'home',
            gameSpeed: 1000
        };

        // Hız kontrol butonu ekle
        const speedButton = document.createElement('button');
        speedButton.id = 'speed-control';
        speedButton.className = 'match-control-button';
        speedButton.innerHTML = '<i class="fas fa-forward"></i> 5x Hız';
        document.querySelector('.match-controls .control-buttons').appendChild(speedButton);

        // Hız kontrolü için event listener
        speedButton.addEventListener('click', () => {
            if (this.matchState.gameSpeed === 1000) {
                this.matchState.gameSpeed = 200; // 5x hız
                speedButton.innerHTML = '<i class="fas fa-play"></i> Normal Hız';
                speedButton.classList.add('fast');
            } else {
                this.matchState.gameSpeed = 1000; // Normal hız
                speedButton.innerHTML = '<i class="fas fa-forward"></i> 5x Hız';
                speedButton.classList.remove('fast');
            }
            
            // Interval'leri yeniden başlat
            clearInterval(this.gameInterval);
            clearInterval(this.timerInterval);
            this.startMatchTimer();
            this.startGameInterval();
        });
        
        // Oyun ve zamanlayıcı interval'lerini başlat
        this.startMatchTimer();
        this.startGameInterval();
    }

    startGameInterval() {
        this.gameInterval = setInterval(() => {
            if (this.matchState.isPlaying) {
                this.simulateGameplay();
            }
        }, this.matchState.gameSpeed); // Hıza göre güncelleme
    }

    startMatchTimer() {
        this.timerInterval = setInterval(() => {
            if (this.matchState.isPlaying) {
                this.matchState.timeLeft--;
                this.updateMatchClock();
                
                if (this.matchState.timeLeft <= 0) {
                    if (this.matchState.quarter < 4) {
                        this.matchState.quarter++;
                        this.matchState.timeLeft = 600; // 10 dakika
                        this.endQuarter();
                    } else {
                        clearInterval(this.timerInterval);
                        clearInterval(this.gameInterval);
                        this.endMatch();
                    }
                }
            }
        }, this.matchState.gameSpeed); // Hıza göre güncelleme
    }

    changePossession() {
        this.matchState.possession = this.matchState.possession === 'home' ? 'away' : 'home';
        this.matchState.possessionTime = 24; // Yeni hücum süresi
    }

    performAction(myFive, opponentFive) {
        // Hücum süresi kontrolü
        if (this.matchState.possessionTime <= 0) {
            this.changePossession();
            showNotification('24 Saniye İhlali!');
            return;
        }

        // Oyuncuların enerjisini azalt
        this.decreasePlayerEnergy();

        // Her saniyede bir aksiyon gerçekleştirme olasılığı
        const actionChance = Math.random();
        if (actionChance > 0.15) return;

        const attackingTeam = this.matchState.possession === 'home' ? myFive : opponentFive;
        const defendingTeam = this.matchState.possession === 'home' ? opponentFive : myFive;

        // Rastgele bir hücum oyuncusu seç
        const positions = ['PG', 'SG', 'SF', 'PF', 'C'];
        const attackerPos = positions[Math.floor(Math.random() * 5)];
        const defenderPos = positions[Math.floor(Math.random() * 5)];

        const attacker = attackingTeam[attackerPos];
        const defender = defendingTeam[defenderPos];

        // Enerji seviyesine göre performans düzeltmesi yap
        const attackerEnergy = this.playerEnergies[this.matchState.possession][attackerPos];
        const defenderEnergy = this.playerEnergies[this.matchState.possession === 'home' ? 'away' : 'home'][defenderPos];

        // Hücum ve savunma güçlerini enerji seviyesine göre ayarla
        const offenseRating = attacker.offense * (attackerEnergy / 100);
        const defenseRating = defender.defense * (defenderEnergy / 100);

        // Aksiyon türünü belirle
        const actionType = Math.random();
        
        // Top kaybı kontrolü (%20 olasılık)
        if (actionType < 0.20) {
            // Savunma gücü yüksekse top kaybı olasılığı artar
            const turnoverChance = 0.35 + (defenseRating - offenseRating) * 0.005;
            if (Math.random() < turnoverChance) {
                this.updatePlayerStats(this.matchState.possession, attackerPos, { turnovers: 1 });
                this.updatePlayerStats(this.matchState.possession === 'home' ? 'away' : 'home', defenderPos, { steals: 1 });
                this.changePossession();
                showNotification('Top Kaybı!');
                return;
            }
        }

        // Şut seçimi
        if (actionType < 0.35) { // 3'lük şut (%15 olasılık)
            const threePointChance = (offenseRating - defenseRating) * 0.004 + 0.28; // %28 baz şans
            if (Math.random() < threePointChance) {
                // Asist olasılığı
                const assistChance = 0.6; // %60 asist olasılığı
                if (Math.random() < assistChance) {
                    // Rastgele bir takım arkadaşı seç (şut atan hariç)
                    const otherPositions = positions.filter(p => p !== attackerPos);
                    const assisterPos = otherPositions[Math.floor(Math.random() * otherPositions.length)];
                    this.updatePlayerStats(this.matchState.possession, assisterPos, { assists: 1 });
                }

                this.updatePlayerStats(this.matchState.possession, attackerPos, {
                    points: 3,
                    threePointers: { made: 1, attempts: 1 }
                });
                this.updateScore(3);
                showNotification('3 Sayılık Basket!');
                this.changePossession();
        } else {
                this.updatePlayerStats(this.matchState.possession, attackerPos, {
                    threePointers: { made: 0, attempts: 1 }
                });
                this.handleRebound();
            }
        } else if (actionType < 0.85) { // 2'lik şut (%50 olasılık)
            const twoPointChance = (offenseRating - defenseRating) * 0.004 + 0.38; // %38 baz şans
            if (Math.random() < twoPointChance) {
                // Asist olasılığı
                const assistChance = 0.5; // %50 asist olasılığı
                if (Math.random() < assistChance) {
                    const otherPositions = positions.filter(p => p !== attackerPos);
                    const assisterPos = otherPositions[Math.floor(Math.random() * otherPositions.length)];
                    this.updatePlayerStats(this.matchState.possession, assisterPos, { assists: 1 });
                }

                this.updatePlayerStats(this.matchState.possession, attackerPos, {
                    points: 2,
                    fieldGoals: { made: 1, attempts: 1 }
                });
                this.updateScore(2);
                showNotification('2 Sayılık Basket!');
                this.changePossession();
    } else {
                this.updatePlayerStats(this.matchState.possession, attackerPos, {
                    fieldGoals: { made: 0, attempts: 1 }
                });
                this.handleRebound();
            }
        } else { // Faul ve serbest atışlar (%15 olasılık)
            const foulChance = 0.4 + (defenseRating - offenseRating) * 0.003;
            if (Math.random() < foulChance) {
                this.updatePlayerStats(this.matchState.possession === 'home' ? 'away' : 'home', defenderPos, { fouls: 1 });
                this.handleFoulShots(attackerPos);
                this.changePossession();
            }
        }
    }

    handleRebound() {
        const positions = ['PG', 'SG', 'SF', 'PF', 'C'];
        const reboundPos = positions[Math.floor(Math.random() * 5)];
        
        // Savunma ribaundu daha olası (%70)
        if (Math.random() < 0.7) {
            this.updatePlayerStats(
                this.matchState.possession === 'home' ? 'away' : 'home',
                reboundPos,
                { rebounds: 1 }
            );
            this.changePossession();
        } else {
            // Hücum ribaundu
            this.updatePlayerStats(this.matchState.possession, reboundPos, { rebounds: 1 });
            this.matchState.possessionTime = 14; // Hücum ribaundu sonrası 14 saniye
        }
    }

    updateScore(points) {
        if (this.matchState.possession === 'home') {
            this.matchState.homeScore += points;
    } else {
            this.matchState.awayScore += points;
        }
    }

    endQuarter() {
        // Çeyrek sonunda pozisyon sayacını sıfırla
        this.matchState.quarterPossessions = 0;
        
        // Çeyrek sonunda yapılacak diğer işlemler
        this.matchState.possessionTime = 24;
        showNotification(`${this.matchState.quarter}. Periyot Sonu`);
        
        // Periyot arası molası
        this.matchState.isPlaying = false;
        setTimeout(() => {
            // Yeni periyot başlarken her oyuncuya 10 enerji ver
            ['home', 'away'].forEach(team => {
                Object.keys(this.playerEnergies[team]).forEach(pos => {
                    this.playerEnergies[team][pos] = Math.min(
                        100,
                        this.playerEnergies[team][pos] + 10
                    );
                });
            });
            
            this.matchState.isPlaying = true;
        }, 3000);
    }

    endMatch() {
        clearInterval(this.gameInterval);
        const startButton = document.getElementById('start-match');
        startButton.textContent = 'Maç Bitti';
        startButton.disabled = true;

        // Maç sonucunu göster
        this.showMatchResult();

        // MyTeam oyuncularının enerji ve istatistiklerini güncelle
        const myTeam = JSON.parse(localStorage.getItem('myTeam')) || [];
        Object.entries(this.myFive || {}).forEach(([position, player]) => {
            if (player) {
                const teamPlayer = myTeam.find(p => p.name === player.name);
                if (teamPlayer) {
                    // Enerji seviyesini güncelle
                    teamPlayer.energy = this.playerEnergies.home[position];
                    
                    // Maç istatistiklerini güncelle (opsiyonel)
                    // teamPlayer.points += player.matchPoints;
                    // teamPlayer.rebounds += player.matchRebounds;
                    // vs...
                }
            }
        });

        // Güncellenmiş takımı kaydet
        localStorage.setItem('myTeam', JSON.stringify(myTeam));
        
        // Maç sonunda XP kazanma
        const xpEarned = this.calculateMatchXP();
        addXP(xpEarned);
        
        showNotification(`Maç sonu: ${xpEarned} XP kazandın!`);
    }

    showMatchResult() {
        // Kazanan takımı belirle
        const isHomeWinner = this.matchState.homeScore > this.matchState.awayScore;
        
        // Sonuç ekranını oluştur
        const resultOverlay = document.createElement('div');
        resultOverlay.className = 'match-result-overlay';
        
        resultOverlay.innerHTML = `
            <div class="match-result-content">
                <h2 class="result-title ${isHomeWinner ? 'winner' : 'loser'}">
                    ${isHomeWinner ? 'KAZANDINIZ!' : 'KAYBETTİNİZ!'}
                </h2>
                <div class="final-score">
                    ${this.matchState.homeScore} - ${this.matchState.awayScore}
                </div>
                ${isHomeWinner ? `
                    <div class="prize-info">
                        <img src="money-icon.png" alt="Para Ödülü" class="money-icon">
                        <span>+100,000$</span>
                    </div>
                ` : ''}
                <button class="continue-button">Devam Et</button>
            </div>
        `;

        document.body.appendChild(resultOverlay);

        // Kazanınca para ödülünü ekle
        if (isHomeWinner) {
            const currentMoney = parseInt(localStorage.getItem('money')) || 0;
            localStorage.setItem('money', currentMoney + 100000);
        }

        // Devam et butonuna tıklanınca
        resultOverlay.querySelector('.continue-button').addEventListener('click', () => {
            resultOverlay.remove();
            this.quitMatch();
        });
    }

    quitMatch() {
        // quitMatch işlemi burada gerçekleştirilecek
    }

    getAvailableSubs(allPlayers, currentFive, position) {
        // Şu anda oyunda olmayan ve aynı pozisyondaki oyuncuları filtrele
        const activePlayers = Object.values(currentFive).map(p => p.name);
        return allPlayers.filter(player => 
            !activePlayers.includes(player.name) && 
            player.position === position
        );
    }

    handleSubSelectionChange() {
        const playerOutSelect = document.getElementById('player-out');
        const playerInSelect = document.getElementById('player-in');
        const subButton = document.getElementById('make-sub');
        
        // Çıkacak oyuncu seçildiğinde
        if (playerOutSelect.value) {
            const selectedPosition = playerOutSelect.value; // PG, SG, SF, PF, C
            const myTeamData = JSON.parse(localStorage.getItem('myTeam')) || [];
            
            // Seçilen pozisyondaki yedek oyuncuları bul
            const availableSubs = myTeamData.filter(player => 
                player.position === selectedPosition && // Aynı pozisyonda olmalı
                !Object.values(this.getCurrentFive()).map(p => p.name).includes(player.name) // Sahada olmamalı
            );

            // Yedek oyuncuları listele
            playerInSelect.innerHTML = `
                <option value="">Girecek Oyuncu</option>
                ${availableSubs.map(player => `
                    <option value="${player.name}">${player.name}</option>
                `).join('')}
            `;
        } else {
            playerInSelect.innerHTML = '<option value="">Girecek Oyuncu</option>';
        }
        
        // Değişiklik butonu kontrolü
        subButton.disabled = !playerOutSelect.value || !playerInSelect.value;
    }

    makeSubstitution(currentFive, myTeamData) {
        const playerOutSelect = document.getElementById('player-out');
        const playerInSelect = document.getElementById('player-in');
        
        const positionOut = playerOutSelect.value; // PG, SG, SF, PF, C
        const playerInName = playerInSelect.value;
        
        if (!positionOut || !playerInName) return;
        
        // Girecek oyuncuyu bul
        const playerIn = myTeamData.find(p => p.name === playerInName);
        if (!playerIn) return;

        // Çıkan oyuncunun son istatistiklerini kaydet
        const playerOutStats = document.getElementById(`home-${positionOut}-stats`);
        if (playerOutStats) {
            const outPlayerName = currentFive[positionOut].name;
            const stats = {
                points: parseInt(playerOutStats.querySelector('.points').textContent),
                rebounds: parseInt(playerOutStats.querySelector('.rebounds').textContent),
                assists: parseInt(playerOutStats.querySelector('.assists').textContent),
                // ... diğer istatistikler
            };
            // İsterseniz bu istatistikleri bir yerde saklayabilirsiniz
        }

        // Değişikliği yap
        currentFive[positionOut] = playerIn;
        
        // Sahada görünen oyuncuyu güncelle
        const playerElement = document.querySelector(`.team.home .player[data-position="${positionOut}"]`);
        if (playerElement) {
            playerElement.innerHTML = `
                ${playerIn.image ? `<img src="${playerIn.image}" alt="${playerIn.name}" onerror="this.style.display='none'">` : ''}
                <div class="player-info">
                    <div class="name">${playerIn.name}</div>
                    <div class="position">${positionOut}</div>
                    <div class="stats">
                        OFF: ${playerIn.offense} | DEF: ${playerIn.defense}
                    </div>
                </div>
            `;
        }

        // İstatistik panelini güncelle - yeni oyuncu için sıfır istatistiklerle başla
        this.updatePlayerStats('home', positionOut, {
            points: 0,
            energy: 100,
            fieldGoals: { made: 0, attempts: 0 },
            threePointers: { made: 0, attempts: 0 },
            freeThrows: { made: 0, attempts: 0 },
            assists: 0,
            rebounds: 0,
            minutes: 0,
            steals: 0,
            turnovers: 0,
            fouls: 0
        });

        // Seçimleri sıfırla
        playerOutSelect.value = '';
        playerInSelect.innerHTML = '<option value="">Girecek Oyuncu</option>';
        document.getElementById('make-sub').disabled = true;
    }

    // Yardımcı fonksiyon: Sahada kim var?
    getCurrentFive() {
        const currentFive = {};
        const homeTeam = document.querySelectorAll('.team.home .player');
        homeTeam.forEach(playerElement => {
            const position = playerElement.dataset.position;
            const name = playerElement.querySelector('.name').textContent;
            currentFive[position] = { name, position };
        });
        return currentFive;
    }

    // localStorage'daki ilk 5'i güncellemek için yardımcı fonksiyon
    updateStartingFive(newStartingFive) {
        localStorage.setItem('startingFive', JSON.stringify(newStartingFive));
    }

    decreasePlayerEnergy() {
        ['home', 'away'].forEach(team => {
            Object.keys(this.playerEnergies[team]).forEach(pos => {
                // Hücumdaki takımın oyuncuları daha çok yorulur
                const energyDecrease = this.matchState.possession === team ? 0.15 : 0.1;
                
                this.playerEnergies[team][pos] = Math.max(
                    30, // Minimum enerji seviyesi
                    this.playerEnergies[team][pos] - energyDecrease
                );

                // Enerji düşükse uyarı göster
                if (this.playerEnergies[team][pos] < 40) {
                    const playerName = team === 'home' ? 
                        this.myFive[pos].name : 
                        this.opponentFive[pos].name;
                    showNotification(`${playerName} yorgun!`);
                }

                // Enerji seviyesini UI'da güncelle
                this.updatePlayerStats(team, pos, {});
            });
        });
    }

    handleFoulShots(position) {
        // Serbest atış sayısını belirle (2 veya 3)
        const numFreeThrows = Math.random() < 0.2 ? 3 : 2; // %20 ihtimalle 3 serbest atış
        let madeShots = 0;

        // Oyuncunun offense değeri ve enerjisine göre serbest atış yüzdesi hesapla
        const shooter = this.matchState.possession === 'home' ? 
            this.myFive[position] : 
            this.opponentFive[position];
        
        const shooterEnergy = this.playerEnergies[this.matchState.possession][position];
        const freeThrowPercentage = (shooter.offense * (shooterEnergy / 100) * 0.01) + 0.5; // Baz %50 şans

        // Her serbest atış için
        for (let i = 0; i < numFreeThrows; i++) {
            if (Math.random() < freeThrowPercentage) {
                madeShots++;
            }
        }

        // İstatistikleri güncelle
        this.updatePlayerStats(this.matchState.possession, position, {
            points: madeShots,
            freeThrows: { made: madeShots, attempts: numFreeThrows }
        });

        // Skoru güncelle
        this.updateScore(madeShots);

        // Bildirim göster
        if (madeShots > 0) {
            showNotification(`${madeShots}/${numFreeThrows} Serbest Atış!`);
        }
    }

    // Yeni fonksiyon: MyTeam oyuncularının verilerini senkronize et
    syncMyTeamPlayers() {
        // localStorage'dan myTeam verilerini al
        const myTeam = JSON.parse(localStorage.getItem('myTeam')) || [];
        
        // İlk 5'teki her oyuncu için
        Object.entries(this.myFive || {}).forEach(([position, player]) => {
            if (player) {
                // MyTeam'de bu oyuncuyu bul
                const teamPlayer = myTeam.find(p => p.name === player.name);
                if (teamPlayer) {
                    // Oyuncunun tüm özelliklerini güncelle
                    Object.assign(player, teamPlayer);
                    
                    // Enerji seviyesini güncelle
                    this.playerEnergies.home[position] = teamPlayer.energy || 100;
                    
                    // İstatistikleri güncelle
                    player.points = teamPlayer.points || 0;
                    player.rebounds = teamPlayer.rebounds || 0;
                    player.assists = teamPlayer.assists || 0;
                    player.steals = teamPlayer.steals || 0;
                    player.offense = teamPlayer.offense || 0;
                    player.defense = teamPlayer.defense || 0;
                }
            }
        });
    }

    updateMatchInterface() {
        const matchScreen = document.getElementById('match-screen');
        if (!matchScreen) return;

        // Skor ve süre bilgilerini güncelle
        const scoreDisplay = matchScreen.querySelector('.score-display');
        if (scoreDisplay) {
            scoreDisplay.innerHTML = `
                <div class="team-score home">${this.matchState.homeScore}</div>
                <div class="time-display">
                    <div class="quarter">${this.matchState.quarter}. Çeyrek</div>
                    <div class="time">${Math.floor(this.matchState.timeLeft / 60)}:${(this.matchState.timeLeft % 60).toString().padStart(2, '0')}</div>
                </div>
                <div class="team-score away">${this.matchState.awayScore}</div>
            `;
        }

        // Oyuncu istatistiklerini güncelle
        this.updateAllPlayerStats();
    }

    updateAllPlayerStats() {
        // Her iki takımın oyuncularının istatistiklerini güncelle
        ['home', 'away'].forEach(team => {
            const players = team === 'home' ? this.myFive : this.opponentFive;
            Object.entries(players).forEach(([position, player]) => {
                if (player) {
                    this.updatePlayerStats(team, position, {
                        energy: this.playerEnergies[team][position]
                    });
                }
            });
        });
    }

    handleSubstitution() {
        // Oyun durumunu kontrol et
        if (!this.matchState.isPlaying) return;
        
        // Değişiklik panelini oluştur
        const substitutionPanel = `
            <div class="substitution-sidebar">
                <div class="sub-panel-header">
                    <h3>Yedek Oyuncular</h3>
                    <button class="close-sub-panel" onclick="cancelSubstitution()">
                        <i class="fas fa-times"></i>
                    </button>
                </div>
                <div class="bench-players">
                    ${this.getBenchPlayers().map(player => `
                        <div class="bench-player-card" onclick="selectBenchPlayer('${player.name}', '${player.position}')">
                    <img src="${player.image}" alt="${player.name}">
                            <div class="player-info">
                                <div class="name">${player.name}</div>
                                <div class="position">${player.position}</div>
                                <div class="energy ${this.getEnergyClass(player.energy)}">
                                    ${player.energy}% ⚡
                                </div>
                                <div class="stats">
                                    <span>OFF: ${player.offense}</span>
                                    <span>DEF: ${player.defense}</span>
                                </div>
                            </div>
                        </div>
                    `).join('')}
                </div>
                </div>
            `;

        // Paneli ekrana ekle
        document.querySelector('.match-container').insertAdjacentHTML('beforeend', substitutionPanel);
    }

    getEnergyClass(energy) {
        if (!energy && energy !== 0) return 'high';
        if (energy >= 70) return 'high';
        if (energy >= 40) return 'medium';
        return 'low';
    }

    getBenchPlayers() {
        if (!this.myTeamData || !this.myFive) return [];
        
        return this.myTeamData.filter(player => 
            !Object.values(this.myFive).some(starter => starter.name === player.name)
        );
    }

    selectedPlayers = {
        court: null,
        bench: null
    };

    selectPlayerForSub(type, playerName, position) {
        this.selectedPlayers[type] = { name: playerName, position: position };
        
        // Seçili oyuncuları vurgula
        document.querySelectorAll('.player-row').forEach(row => {
            row.classList.remove('selected');
            if (row.querySelector('.name').textContent === playerName) {
                row.classList.add('selected');
            }
        });

        // Her iki oyuncu da seçildi mi kontrol et
        const confirmBtn = document.querySelector('.confirm-btn');
        if (this.selectedPlayers.court && this.selectedPlayers.bench) {
            confirmBtn.disabled = false;
        }
    }

    confirmSubstitution() {
        if (!this.selectedPlayers.court || !this.selectedPlayers.bench) return;

        // Değişikliği yap
        const courtPlayer = this.selectedPlayers.court;
        const benchPlayer = this.selectedPlayers.bench;

        // Pozisyonları kontrol et ve değişikliği yap
        if (this.canSubstitute(courtPlayer, benchPlayer)) {
            this.makeSubstitution(courtPlayer, benchPlayer);
            this.cancelSubstitution(); // Paneli kapat
            this.updateMatchInterface(); // Arayüzü güncelle
        } else {
            alert('Bu oyuncular aynı pozisyonda değil!');
        }
    }

    canSubstitute(courtPlayer, benchPlayer) {
        // Pozisyon kontrolü
        return courtPlayer.position === benchPlayer.position;
    }

    makeSubstitution(courtPlayer, benchPlayer) {
        // Oyuncuları değiştir
        const position = courtPlayer.position;
        const courtPlayerObj = this.myFive[position];
        const benchPlayerObj = this.myTeamData.find(p => p.name === benchPlayer.name);

        this.myFive[position] = benchPlayerObj;
        
        // İstatistikleri güncelle
        this.updatePlayerStats();
    }

    cancelSubstitution() {
        // Değişiklik panelini kaldır
        const panel = document.querySelector('.substitution-overlay');
        if (panel) panel.remove();
        
        // Seçimleri sıfırla
        this.selectedPlayers = {
            court: null,
            bench: null
        };
    }

    // Yedek oyuncu seçme işlemi
    selectBenchPlayer(playerName, position) {
        // Sahada aynı pozisyonda oynayan oyuncuyu bul
        const courtPlayer = Object.entries(this.myFive).find(([pos, player]) => pos === position);
        
        if (courtPlayer) {
            // Değişikliği yap
            const [courtPos, courtPlayerData] = courtPlayer;
            const benchPlayer = this.myTeamData.find(p => p.name === playerName);
            
            if (benchPlayer && benchPlayer.position === position) {
                // Oyuncuları değiştir
                this.myFive[courtPos] = benchPlayer;
                
                // Paneli kapat
                cancelSubstitution();
                
                // Maç ekranını güncelle
                this.updateMatchScreen();
            } else {
                alert('Bu oyuncular aynı pozisyonda değil!');
            }
        }
    }

    // Maç ekranını güncelle
    updateMatchScreen() {
        const matchScreen = document.getElementById('match-screen');
        if (matchScreen) {
            this.displayMatchScreen(
                this.myFive,
                this.opponentFive,
                'MYTEAM',
                this.opponentTeam.name,
                this.myTeamData,
                this.opponentTeam
            );
        }
    }

    // Taktik panelini göster
    handleTactics() {
        const tacticsPanel = `
            <div class="tactics-sidebar">
                <div class="tactics-panel-header">
                    <h3>Taktik Ayarları</h3>
                    <button class="close-tactics-panel" onclick="cancelTactics()">
                        <i class="fas fa-times"></i>
                    </button>
                </div>
                <div class="tactics-content">
                    <div class="tactics-section offense">
                        <h4>Hücum Taktiği</h4>
                        ${Object.entries(this.tacticSets.offense).map(([key, tactic]) => `
                            <div class="tactic-option ${this.tactics.offense.current === key ? 'active' : ''}"
                                 onclick="selectTactic('offense', '${key}')">
                                <div class="tactic-header">
                                    <h5>${tactic.name}</h5>
                                    <span class="tactic-status">
                                        ${this.tactics.offense.current === key ? '✓' : ''}
                                    </span>
                                </div>
                                <p>${tactic.description}</p>
                                <div class="tactic-effects">
                                    ${Object.entries(tactic.multipliers).map(([pos, mult]) => `
                                        <span class="effect ${mult > 1 ? 'positive' : mult < 1 ? 'negative' : ''}">
                                            ${pos}: ${(mult * 100).toFixed(0)}%
                                        </span>
                                    `).join('')}
                                </div>
                            </div>
                        `).join('')}
                    </div>
                    <div class="tactics-section defense">
                        <h4>Savunma Taktiği</h4>
                        ${Object.entries(this.tacticSets.defense).map(([key, tactic]) => `
                            <div class="tactic-option ${this.tactics.defense.current === key ? 'active' : ''}"
                                 onclick="selectTactic('defense', '${key}')">
                                <div class="tactic-header">
                                    <h5>${tactic.name}</h5>
                                    <span class="tactic-status">
                                        ${this.tactics.defense.current === key ? '✓' : ''}
                                    </span>
                                </div>
                                <p>${tactic.description}</p>
                                <div class="tactic-effects">
                                    ${Object.entries(tactic.multipliers).map(([pos, mult]) => `
                                        <span class="effect ${mult > 1 ? 'positive' : mult < 1 ? 'negative' : ''}">
                                            ${pos}: ${(mult * 100).toFixed(0)}%
                                        </span>
                                    `).join('')}
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>
            </div>
        `;

        document.querySelector('.match-container').insertAdjacentHTML('beforeend', tacticsPanel);
    }

    // Taktik değiştirme
    changeTactic(type, tacticKey) {
        this.tactics[type].current = tacticKey;
        this.tactics[type].multipliers = {...this.tacticSets[type][tacticKey].multipliers};
        
        // Oyuncu kartlarını güncelle
        if (type === 'offense') {
            // Hücum taktiği sadece kendi takımımızı etkiler
            Object.entries(this.myFive).forEach(([position, player]) => {
                const card = document.querySelector(`.player-card.${position.toLowerCase()}`);
                if (card) {
                    const offenseMultiplier = this.tactics.offense.multipliers[position];
                    const playerName = card.querySelector('.player-name');
                    playerName.innerHTML = `
                        ${player.name}
                        ${offenseMultiplier > 1 ? '<i class="fas fa-fire tactic-effect-icon fire"></i>' : ''}
                    `;
                }
            });
        } else if (type === 'defense') {
            // Savunma taktiği sadece rakip takımı etkiler
            Object.entries(this.opponentFive).forEach(([position, player]) => {
                const card = document.querySelector(`.team-side.away .player-card.${position.toLowerCase()}`);
                if (card) {
                    const defenseEffect = 2 - this.tactics.defense.multipliers[position];
                    const playerName = card.querySelector('.player-name');
                    playerName.innerHTML = `
                        ${player.name}
                        ${defenseEffect > 1 ? '<i class="fas fa-snowflake tactic-effect-icon ice"></i>' : ''}
                    `;
                }
            });
        }
    }

    // Oyuncu kartı HTML'ini oluşturan yardımcı fonksiyon
    createPlayerCard(player, position, team, tactics) {
        // Hücum çarpanını sadece kendi takımımız için kontrol et
        const offenseMultiplier = team === 'home' ? tactics.offense.multipliers[position] : 1;
        // Savunma çarpanını sadece rakip takım için kontrol et
        const defenseMultiplier = team === 'away' ? tactics.defense.multipliers[position] : 1;
        
        const showFireIcon = team === 'home' && offenseMultiplier > 1;
        const showIceIcon = team === 'away' && defenseMultiplier < 1; // Savunma etkisi tersine çevrildiği için < 1
        
        return `
            <div class="player-card ${position.toLowerCase()}" data-position="${position}">
                <img src="${player.image || 'default-player.png'}" alt="${player.name}">
                <div class="player-info">
                    <div class="player-name">
                        ${player.name}
                        ${showFireIcon ? '<i class="fas fa-fire tactic-effect-icon fire"></i>' : ''}
                        ${showIceIcon ? '<i class="fas fa-snowflake tactic-effect-icon ice"></i>' : ''}
                    </div>
                    <div class="player-position">${position}</div>
                    <div class="player-energy">${team === 'home' ? this.playerEnergies.home[position] : this.playerEnergies.away[position]}%</div>
                </div>
            </div>
        `;
    }

    // Malzeme panelini göster
    handleItems() {
        const itemsPanel = `
            <div class="items-sidebar">
                <div class="items-panel-header">
                    <h3>Malzemeler</h3>
                    <button class="close-items-panel" onclick="cancelItems()">
                        <i class="fas fa-times"></i>
                    </button>
                </div>
                <div class="items-content">
                    <div class="item-card ${this.items.water.count > 0 ? 'available' : 'depleted'}" 
                         draggable="true" 
                         ondragstart="handleDragStart(event, 'water')">
                        <div class="item-icon">
                            <img src="${this.items.water.image}" alt="Su Şişesi">
                        </div>
                        <div class="item-info">
                            <div class="item-name">${this.items.water.name}</div>
                            <div class="item-description">${this.items.water.description}</div>
                            <div class="item-count">Kalan: ${this.items.water.count}</div>
                        </div>
                    </div>
                </div>
            </div>
        `;

        document.querySelector('.match-container').insertAdjacentHTML('beforeend', itemsPanel);
        this.initializeDragAndDrop();
    }

    // Sürükle-bırak işlemlerini başlat
    initializeDragAndDrop() {
        // Oyuncu kartlarını hedef olarak işaretle
        const playerCards = document.querySelectorAll('.team-side.home .player-card');
        playerCards.forEach(card => {
            card.addEventListener('dragover', (e) => {
                e.preventDefault();
                card.classList.add('drag-over');
            });

            card.addEventListener('dragleave', () => {
                card.classList.remove('drag-over');
            });

            card.addEventListener('drop', (e) => {
                e.preventDefault();
                card.classList.remove('drag-over');
                const itemType = e.dataTransfer.getData('item');
                const position = card.dataset.position;
                this.useItem(itemType, position);
            });
        });
    }

    // Malzemeyi kullan
    useItem(itemType, position) {
        if (itemType === 'water' && this.items.water.count > 0) {
            const currentEnergy = this.playerEnergies.home[position];
            const newEnergy = Math.min(100, currentEnergy + this.items.water.effect);
            this.playerEnergies.home[position] = newEnergy;
            this.items.water.count--;

            // Enerji barını güncelle
            const energyDisplay = document.querySelector(`.player-card.${position.toLowerCase()} .player-energy`);
            if (energyDisplay) {
                energyDisplay.textContent = `${newEnergy}%`;
            }

            // Malzeme sayısını güncelle
            const countDisplay = document.querySelector('.item-count');
            if (countDisplay) {
                countDisplay.textContent = `Kalan: ${this.items.water.count}`;
            }

            // Malzeme tükendiyse kartı devre dışı bırak
            if (this.items.water.count === 0) {
                const itemCard = document.querySelector('.item-card');
                if (itemCard) {
                    itemCard.classList.remove('available');
                    itemCard.classList.add('depleted');
                    itemCard.draggable = false;
                }
            }
        }
    }

    startGameplay() {
        // Maç başlatma butonunu gizle
        const startButton = document.querySelector('.start-match-btn');
        if (startButton) {
            startButton.classList.add('hidden');
        }

        // Maç durumunu başlat
        this.matchState.isPlaying = true;
        this.matchState.gameSpeed = 1000; // Normal hız (1 saniye)
        
        // Hız kontrol butonu ekle
        const speedButton = document.createElement('button');
        speedButton.id = 'speed-control';
        speedButton.className = 'match-control-button';
        speedButton.innerHTML = '<i class="fas fa-forward"></i> 5x Hız';
        document.querySelector('.match-controls .control-buttons').appendChild(speedButton);

        // Hız kontrolü için event listener
        speedButton.addEventListener('click', () => {
            if (this.matchState.gameSpeed === 1000) { // Normal -> 5x
                this.matchState.gameSpeed = 200; // 5x hız
                speedButton.innerHTML = '<i class="fas fa-forward"></i> 15x Hız';
                speedButton.classList.add('fast');
            } else if (this.matchState.gameSpeed === 200) { // 5x -> 15x
                this.matchState.gameSpeed = 67; // 15x hız (1000/15)
                speedButton.innerHTML = '<i class="fas fa-play"></i> Normal Hız';
                speedButton.classList.add('very-fast');
            } else { // 15x -> Normal
                this.matchState.gameSpeed = 1000; // Normal hız
                speedButton.innerHTML = '<i class="fas fa-forward"></i> 5x Hız';
                speedButton.classList.remove('fast', 'very-fast');
            }
            
            // Interval'leri yeniden başlat
            clearInterval(this.gameInterval);
            clearInterval(this.timerInterval);
            this.startMatchTimer();
            this.startGameInterval();
        });
        
        // Oyun ve zamanlayıcı interval'lerini başlat
        this.startMatchTimer();
        this.startGameInterval();
    }

    startGameInterval() {
        this.gameInterval = setInterval(() => {
            if (this.matchState.isPlaying) {
                this.simulateGameplay();
            }
        }, this.matchState.gameSpeed); // Hıza göre güncelleme
    }

    startMatchTimer() {
        this.timerInterval = setInterval(() => {
            if (this.matchState.isPlaying) {
                this.matchState.timeLeft--;
                this.updateMatchClock();
                
                if (this.matchState.timeLeft <= 0) {
                    if (this.matchState.quarter < 4) {
                        this.matchState.quarter++;
                        this.matchState.timeLeft = 600; // 10 dakika
                        this.endQuarter();
                    } else {
                        clearInterval(this.timerInterval);
                        clearInterval(this.gameInterval);
                        this.endMatch();
                    }
                }
            }
        }, this.matchState.gameSpeed); // Hıza göre güncelleme
    }

    simulateGameplay() {
        // Her çeyrekte yaklaşık 30 pozisyon olacak şekilde ayarla (toplam 120 pozisyon)
        const totalQuarterTime = 600; // 10 dakika = 600 saniye
        const targetPossessions = 30; // hedef pozisyon sayısı artırıldı
        
        // Geçen süreye göre olması gereken minimum pozisyon sayısı
        const elapsedTime = 600 - this.matchState.timeLeft;
        const expectedPossessions = Math.floor((elapsedTime / totalQuarterTime) * targetPossessions);
        
        // Eğer bu çeyrekteki pozisyon sayısı maksimuma ulaştıysa, yeni pozisyon oluşturma
        if (!this.matchState.quarterPossessions) {
            this.matchState.quarterPossessions = 0;
        }
        
        // Pozisyonları dengeli dağıtmak için kontrol
        if (this.matchState.quarterPossessions >= targetPossessions) {
            return; // Maksimum pozisyon sayısına ulaşıldı
        }
        
        if (this.matchState.quarterPossessions > expectedPossessions + 3) { // Tolerans artırıldı
            return; // Şu ana kadar olması gerekenden fazla pozisyon oynandı
        }

        // Her saniye için pozisyon olasılığı (%5 - tempo biraz artırıldı)
        const shouldCreatePossession = Math.random() < 0.05;
        
        // Hücum takımının ortalama enerjisini kontrol et
        const attackingTeam = this.matchState.possession === 'home' ? 'home' : 'away';
        const avgEnergy = Object.values(this.playerEnergies[attackingTeam])
            .reduce((sum, energy) => sum + energy, 0) / 5;

        // Eğer ortalama enerji 0'dan büyükse pozisyon oyna
        if (shouldCreatePossession && avgEnergy > 0) {
            this.matchState.quarterPossessions++;
            
            const attackingTeam = this.matchState.possession === 'home' ? 'home' : 'away';
            const defendingTeam = attackingTeam === 'home' ? 'away' : 'home';
            const attackingPlayers = attackingTeam === 'home' ? this.myFive : this.opponentFive;
            const defendingPlayers = attackingTeam === 'home' ? this.opponentFive : this.myFive;

            // Şut kullanan oyuncuyu seç
            const shootingPlayer = this.getRandomPlayer(attackingTeam);
            const shooter = attackingPlayers[shootingPlayer];
            
            // Oyuncunun enerjisine göre performansını ayarla
            const shooterEnergy = this.playerEnergies[attackingTeam][shootingPlayer];
            const energyFactor = shooterEnergy / 100;
            
            // Şut isabetini enerji faktörüyle çarp
            const shotQuality = this.calculateShotQuality(shooter) * energyFactor;
            
            // Şut başarısını kontrol et
            if (this.isShotSuccessful(shotQuality)) {
                const points = shotQuality >= 70 ? 3 : 2;
                this.updateScore(points);
                this.updatePlayerStats(attackingTeam, shootingPlayer, { 
                    fgMade: 1,
                    points: points
                });

                // Asist olasılığı
                if (Math.random() < 0.6) {
                    const assistPlayer = this.getRandomPlayer(attackingTeam, shootingPlayer);
                    this.updatePlayerStats(attackingTeam, assistPlayer, { assists: 1 });
                }
                this.changePossession();
            } else {
                // Ribaund
                this.handleRebound();
            }

            // Top çalma olasılığı (%8)
            if (Math.random() < 0.08) {
                const stealingPlayer = this.getRandomPlayer(defendingTeam);
                const stolenFromPlayer = shootingPlayer;
                this.updatePlayerStats(defendingTeam, stealingPlayer, { steals: 1 });
                this.updatePlayerStats(attackingTeam, stolenFromPlayer, { turnovers: 1 });
                this.changePossession();
            }

            // Blok olasılığı (%5)
            if (Math.random() < 0.05) {
                const blockingPlayer = this.getRandomPlayer(defendingTeam);
                this.updatePlayerStats(defendingTeam, blockingPlayer, { blocks: 1 });
                this.changePossession();
            }
        }

        this.updatePlayerEnergies();
        this.updateScoreboard();
        this.updateStatsDisplay();
    }

    // Şut kalitesini hesapla (0-100 arası)
    calculateShotQuality(shooter) {
        const baseAccuracy = shooter.offense; // Oyuncunun hücum gücü
        const defenseStrength = this.opponentFive[shooter.position].defense; // Savunmacının defans gücü
        const energy = this.playerEnergies[this.matchState.possession][shooter.position];
        
        // Enerji faktörü (yorgunluk şut isabetini etkiler)
        const energyFactor = energy / 100;
        
        // Taktik çarpanlarını uygula
        const tacticMultiplier = this.tactics[this.matchState.possession === 'home' ? 'offense' : 'defense']
            .multipliers[shooter.position];

        return (baseAccuracy * energyFactor * tacticMultiplier - defenseStrength * 0.5) * 0.7;
    }

    // Şutun başarılı olup olmadığını kontrol et
    isShotSuccessful(quality) {
        const basePercentage = quality >= 70 ? 35 : 45; // 3'lük ve 2'lik için baz yüzdeler
        const adjustedPercentage = (basePercentage + quality * 0.3) / 100;
        return Math.random() < adjustedPercentage;
    }

    handleRebound() {
        // Savunma ribaundu daha olası (%70)
        const isDefensiveRebound = Math.random() < 0.7;
        const reboundTeam = isDefensiveRebound ? 
            (this.matchState.possession === 'home' ? 'away' : 'home') : 
            this.matchState.possession;

        // Uzun oyuncuların ribaund alma şansı daha yüksek
        const positions = ['C', 'PF', 'SF', 'SG', 'PG'];
        const weights = [0.35, 0.25, 0.20, 0.10, 0.10];
        
        const reboundPos = this.getWeightedRandomPosition(positions, weights);
        
        this.updatePlayerStats(reboundTeam, reboundPos, { rebounds: 1 });
        
        if (isDefensiveRebound) {
            this.changePossession();
        } else {
            // Hücum ribaundu sonrası 14 saniye
            this.matchState.possessionTime = 14;
        }
    }

    // Ağırlıklı rastgele pozisyon seçimi
    getWeightedRandomPosition(positions, weights) {
        const total = weights.reduce((a, b) => a + b, 0);
        const random = Math.random() * total;
        let sum = 0;
        
        for (let i = 0; i < positions.length; i++) {
            sum += weights[i];
            if (random < sum) return positions[i];
        }
        
        return positions[positions.length - 1];
    }

    updatePlayerEnergies() {
        // Her takımın oyuncularının enerjisini azalt
        ['home', 'away'].forEach(team => {
            Object.keys(this.playerEnergies[team]).forEach(pos => {
                // Oyuncu hala sahada ve maç devam ediyorsa enerjiyi azalt
                if (this.matchState.isPlaying) {
                    // Her saniye 0.03 enerji azalt (daha da azaltıldı)
                    this.playerEnergies[team][pos] = Math.max(0, 
                        this.playerEnergies[team][pos] - 0.03);
                    
                    // Pozisyon oynanırken ekstra enerji azalt
                    if (this.matchState.possession === team) {
                        // Hücumdaki takımın oyuncuları biraz daha fazla yorulur
                        this.playerEnergies[team][pos] = Math.max(0,
                            this.playerEnergies[team][pos] - 0.01); // Ekstra azalma da düşürüldü
                    }
                }
                
                // Enerji göstergesini güncelle
                const energyDisplay = document.querySelector(
                    `.team-side.${team} .player-card.${pos.toLowerCase()} .player-energy`
                );
                if (energyDisplay) {
                    energyDisplay.textContent = `${Math.round(this.playerEnergies[team][pos])}%`;
                }
            });
        });
    }

    updateScoreboard() {
        // Skor tablosunu güncelle
        const homeScore = document.querySelector('.team-score.home');
        const awayScore = document.querySelector('.team-score.away');
        
        if (homeScore) homeScore.textContent = this.matchState.homeScore;
        if (awayScore) awayScore.textContent = this.matchState.awayScore;
    }

    updateMatchClock() {
        // Süre göstergesini güncelle
        const timeDisplay = document.querySelector('.time');
        const quarterDisplay = document.querySelector('.quarter');
        
        if (timeDisplay) {
            const minutes = Math.floor(this.matchState.timeLeft / 60);
            const seconds = this.matchState.timeLeft % 60;
            timeDisplay.textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`;
        }
        
        if (quarterDisplay) {
            quarterDisplay.textContent = `${this.matchState.quarter}. Çeyrek`;
        }
    }

    endMatch() {
        // Maç simülasyonunu durdur
        clearInterval(this.gameInterval);
        this.matchState.isPlaying = false;
        
        // Maç sonucu ekranını göster
        this.showMatchResult();
    }

    showMatchResult() {
        const winner = this.matchState.homeScore > this.matchState.awayScore ? 'MYTEAM' : this.opponentTeam.name;
        const resultHTML = `
            <div class="match-result-overlay">
                <div class="match-result-content">
                    <h2 class="result-title ${winner === 'MYTEAM' ? 'winner' : 'loser'}">
                        ${winner === 'MYTEAM' ? 'Kazandınız!' : 'Kaybettiniz!'}
                    </h2>
                    <div class="final-score">
                        ${this.matchState.homeScore} - ${this.matchState.awayScore}
                    </div>
                    <button class="continue-button" onclick="location.reload()">
                        Devam Et
                    </button>
                </div>
            </div>
        `;
        
        document.body.insertAdjacentHTML('beforeend', resultHTML);
    }

    // Rastgele oyuncu seç (belirli bir oyuncuyu hariç tutma seçeneğiyle)
    getRandomPlayer(team, excludePlayer = null) {
        const players = team === 'home' ? Object.keys(this.myFive) : Object.keys(this.opponentFive);
        const availablePlayers = excludePlayer ? players.filter(p => p !== excludePlayer) : players;
        return availablePlayers[Math.floor(Math.random() * availablePlayers.length)];
    }

    // Oyuncu değişikliği için oyuncuyu seç
    selectBenchPlayer(playerName, position) {
        // Yedek oyuncuyu bul
        const benchPlayer = this.myTeamData.find(p => p.name === playerName);
        if (!benchPlayer) return;

        // Sahada olan oyuncuyu bul
        const currentPlayer = this.myFive[position];
        if (!currentPlayer) return;

        // İstatistikleri koru
        const currentStats = this.playerStats.home[currentPlayer.name];
        const benchStats = this.playerStats.home[playerName] || {
            points: 0, fgMade: 0, fgAttempts: 0, rebounds: 0,
            assists: 0, steals: 0, blocks: 0, turnovers: 0, fouls: 0
        };

        // Oyuncuları değiştir
        this.myFive[position] = benchPlayer;
        
        // Enerji seviyelerini güncelle
        this.playerEnergies.home[position] = benchPlayer.energy || 100;

        // İstatistikleri güncelle
        this.playerStats.home[currentPlayer.name] = currentStats;
        this.playerStats.home[playerName] = benchStats;

        // Oyuncu değişikliği panelini kapat
        cancelSubstitution();
        
        // Ekranı güncelle
        this.updateStatsDisplay();
    }

    calculateMatchXP() {
        // Kazanılan XP hesaplama
        const baseXP = 50; // Temel XP (her maç için)
        let totalXP = baseXP;
        
        // Galibiyet bonusu
        if (this.matchState.homeScore > this.matchState.awayScore) {
            totalXP += 100; // Galibiyet bonusu
            
            // Fark bonusu (10+ sayı fark için)
            const scoreDiff = this.matchState.homeScore - this.matchState.awayScore;
            if (scoreDiff >= 10) {
                totalXP += 25;
            }
        }
        
        // Performans bonusları
        if (this.matchState.homeScore >= 100) {
            totalXP += 50; // 100+ sayı bonusu
        }
        
        // Takım istatistikleri bonusları
        const teamStats = this.calculateTeamStats('home');
        if (teamStats.assists >= 20) totalXP += 25; // Takım oyunu bonusu
        if (teamStats.rebounds >= 40) totalXP += 25; // Ribaund bonusu
        if (teamStats.steals >= 10) totalXP += 25; // Savunma bonusu
        
        return totalXP;
    }

    // Takım istatistiklerini hesapla
    calculateTeamStats(team) {
        const stats = {
            assists: 0,
            rebounds: 0,
            steals: 0
        };
        
        Object.values(this.playerStats[team]).forEach(playerStat => {
            stats.assists += playerStat.assists || 0;
            stats.rebounds += playerStat.rebounds || 0;
            stats.steals += playerStat.steals || 0;
        });
        
        return stats;
    }

    // Buton dinleyicilerini ekle
    addButtonListeners() {
        // Play butonları için event listener'lar
        const playButtons = document.querySelectorAll('.play-button');
        playButtons.forEach(button => {
            button.addEventListener('click', () => {
                const teamName = button.getAttribute('data-team');
                this.startMatch(teamName);
            });
        });

        // Collect butonları için event listener'lar
        const collectButtons = document.querySelectorAll('.collect-button');
        collectButtons.forEach(button => {
            button.addEventListener('click', () => {
                const teamName = button.getAttribute('data-team');
                this.collectReward(teamName);
            });
        });
    }

    // Ödül toplama fonksiyonu
    collectReward(teamName) {
        // Temel ödül miktarı
        const baseMoneyReward = 1000;
        
        // Maç skoru ve performansa göre bonus hesapla
        const matchScore = this.matches.find(m => m.homeTeam === teamName || m.awayTeam === teamName);
        let bonusMultiplier = 1;
        
        if (matchScore) {
            const teamScore = matchName.homeTeam === teamName ? matchScore.homeScore : matchScore.awayScore;
            const opponentScore = matchName.homeTeam === teamName ? matchScore.awayScore : matchScore.homeScore;
            
            // Skor farkına göre bonus
            const scoreDiff = teamScore - opponentScore;
            if (scoreDiff > 20) bonusMultiplier += 0.5; // Büyük farkla galibiyet
            if (scoreDiff > 30) bonusMultiplier += 0.5; // Çok büyük farkla galibiyet
            
            // Yüksek skor bonusu
            if (teamScore > 100) bonusMultiplier += 0.3;
            if (teamScore > 120) bonusMultiplier += 0.2;
        }

        // Final ödülü hesapla
        const moneyReward = Math.round(baseMoneyReward * bonusMultiplier);
        
        // XP ödülü (seviyeye göre artan)
        const playerLevel = parseInt(localStorage.getItem('playerLevel')) || 1;
        const baseXPReward = 100;
        const xpReward = Math.round(baseXPReward * (1 + (playerLevel * 0.1)));

        // Ödülleri ver
        money += moneyReward;
        let currentXP = parseInt(localStorage.getItem('playerXP')) || 0;
        currentXP += xpReward;
        
        // XP ve level güncelleme
        localStorage.setItem('playerXP', currentXP);
        this.updateXPBar(currentXP, playerLevel);
        this.checkAndUpdateLevel(currentXP, playerLevel);
        
        // Güncellemeleri kaydet
        saveGame();
        updateMoneyDisplay();

        // Bildirim göster
        let message = `${moneyReward}$ ve ${xpReward} XP kazandınız!`;
        if (bonusMultiplier > 1) {
            message += ` (${Math.round((bonusMultiplier-1)*100)}% Bonus!)`;
        }
        showNotification(message, 'success');
    }

    // Collect butonlarının durumunu güncelle
    updateCollectButtons() {
        const collectedTeams = JSON.parse(localStorage.getItem('collectedTeams') || '[]');
        const collectButtons = document.querySelectorAll('.collect-button');
        
        collectButtons.forEach(button => {
            const teamName = button.getAttribute('data-team');
            if (collectedTeams.includes(teamName)) {
                button.disabled = true;
                button.innerHTML = '<i class="fas fa-check"></i> Toplandı';
            }
        });
    }
}

// Event Listeners
document.addEventListener('DOMContentLoaded', () => {
    // TournamentManager'ı oluştur
    tournamentManager = new TournamentManager();

    // MyTeam'i data.js'deki teams dizisine ekle
    const myTeamData = JSON.parse(localStorage.getItem('myTeam')) || [];
    if (myTeamData.length > 0) {
        // Eğer teams dizisi henüz oluşturulmamışsa oluştur
        if (!window.teams) {
            window.teams = [];
        }
        
        // Varolan MYTEAM'i kaldır (eğer varsa)
        window.teams = window.teams.filter(team => team.name !== 'MYTEAM');
        
        // Yeni MYTEAM'i ekle
        window.teams.unshift({
            name: 'MYTEAM',
            players: myTeamData
        });
    }

    const tournamentButtons = document.querySelectorAll('.join-button');
    
    tournamentButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            const tournamentType = e.target.closest('.tournament-card').dataset.tournament;
            // Global tournament değişkenine ata
            tournament = new Tournament(tournamentType);
            
            if (tournamentType === 'league') {
                tournament.initializeLeague();
            }
        });
    });

    // Topla butonları için event listener
    document.addEventListener('click', (e) => {
        if (e.target.closest('.collect-button')) {
            const button = e.target.closest('.collect-button');
            const teamName = button.dataset.team;
            
            const result = tournamentManager.collectReward(teamName);
            if (result.success) {
                showNotification(result.message, 'success');
                updateMoneyDisplay();
            } else {
                showNotification(result.message, 'warning');
            }
            
            tournamentManager.updateCollectButtons();
        }
    });
});

// Global fonksiyonları ekle
function cancelSubstitution() {
    const panel = document.querySelector('.substitution-sidebar');
    if (panel) panel.remove();
}

function selectBenchPlayer(playerName, position) {
    if (tournament) {
        tournament.selectBenchPlayer(playerName, position);
    }
}

function cancelTactics() {
    const panel = document.querySelector('.tactics-sidebar');
    if (panel) panel.remove();
}

function selectTactic(type, tacticKey) {
    if (tournament) {
        tournament.changeTactic(type, tacticKey);
        cancelTactics();
    }
}

// Global fonksiyonlar
function cancelItems() {
    const panel = document.querySelector('.items-sidebar');
    if (panel) panel.remove();
}

function handleDragStart(event, itemType) {
    event.dataTransfer.setData('item', itemType);
}
