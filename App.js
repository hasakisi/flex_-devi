import { View, Text, StyleSheet } from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      
      <View style={styles.ustkisim}>
        <View style={[styles.kutu,styles.ortalama]}>
          <Text style={{fontSize: 35,color: '#99ff66',margin: 10}}>Üst Kısım</Text>
        </View>
      </View>

   
      <View style={[styles.ortacizgi]}/>


      <View style={styles.altkisim}>
          <View style={styles.kolon}>
            <View style={[styles.kutu,styles.ortalama]}>
              <Text style={styles.yazilar}>Üst Bölüm 1</Text>
            </View>
            <View style={[styles.kutu,styles.ortalama]}>
              <Text style={styles.yazilar}>Üst Bölüm 2</Text>
            </View>
          </View>


          <View style={styles.satir}>
            <View style={[styles.kutu,styles.ortalama]}>
              <Text style={styles.yazilar}>Sol Bölüm 1</Text>
            </View>
            <View style={[styles.kutu,styles.ortalama]}>
              <Text style={styles.yazilar}>Sol Bölüm 2</Text>
            </View>
            <View style={[styles.kutu,styles.ortalama]}>
              <Text style={styles.yazilar}>Orta Bölüm</Text>
            </View>
            <View style={[styles.kutu,styles.ortalama]}>
              <Text style={styles.yazilar}>Sağ Bölüm 2</Text>
            </View>
            <View style={[styles.kutu,styles.ortalama]}>
              <Text style={styles.yazilar}>Sağ Bölüm 1</Text>
            </View>
          </View>

          <View style={styles.kolon}>
            <View style={[styles.kutu,styles.ortalama]}>
              <Text style={styles.yazilar}>Üst Bölüm 3</Text>
            </View>
            <View style={[styles.kutu,styles.ortalama]}>
              <Text style={styles.yazilar}>Üst Bölüm 4</Text>
            </View>
          </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#9966ff',
  },
  
  ustkisim: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  ortalama: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
  },

  kutu: {
    borderWidth: 1,  
    borderColor: '#fff',
  },

  ortacizgi: {
    height: 3,
    backgroundColor: 'red',
    margin: 10,
  },
  altkisim: {
    flex: 1,
    justifyContent: 'center',
    marginTop: 15,
  },

  kolon: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  yazilar: {
    fontSize: 20,
    color: '#ff66cc',    
    padding: 3,
  },

  satir: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },


});

export default App;
