// ...existing code...
final String goldApiUrl =
    'https://raw.githubusercontent.com/Khatym/khatom00007/main/gold.json';

final String currencyApiUrl =
    'https://raw.githubusercontent.com/Khatym/khatom00007/main/currency.json';
// ...existing code...

Future<void> calculatePrices(double goldPriceUSD) async {
  double exchangeRate = 1.0;

  if (selectedCurrency == 'SDG') {
    try {
      final res = await http.get(Uri.parse(sdgApiUrl));
      if (res.statusCode == 200) {
        final data = json.decode(res.body);
        exchangeRate = (data['rate'] as num?)?.toDouble() ?? 1.0;
      }
    } catch (e) {
      print('Error fetching SDG exchange rate: $e');
    }
  } else if (selectedCurrency != 'USD') {
    try {
      final res = await http.get(Uri.parse(currencyApiUrl));
      if (res.statusCode == 200) {
        final data = json.decode(res.body);
        final rate = (data[selectedCurrency] as num?)?.toDouble();
        exchangeRate = rate ?? 1.0;
      }
    } catch (e) {
      print('Error fetching currency rate: $e');
    }
  }

  final gramPrice = goldPriceUSD / 31.1035;
  final newPrices = <String, double>{};

  karatFactors.forEach((karat, factor) {
    newPrices[karat] =
        double.parse((gramPrice * factor * exchangeRate).toStringAsFixed(2));
  });
  setState(() {
    prices = newPrices;
    isLoading = false;
  });
}
// ...existing code...
