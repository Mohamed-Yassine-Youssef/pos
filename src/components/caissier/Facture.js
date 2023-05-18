import React from "react";

const Facture = (total, tableData) => {
  const styles = {
    container: {
      flex: 2,
      padding: 16,
      backgroundColor: "#fff",
      width: "300px",
      marginLeft: "auto",
      marginRight: "auto",
      marginVertical: 10,
    },
    header: {
      marginBottom: 24,
    },
    companyName: {
      fontSize: 24,
      fontWeight: "bold",
      marginBottom: 8,
    },
    address: {
      fontSize: 16,
      marginBottom: 8,
    },
    panTin: {
      fontSize: 16,
      marginBottom: 16,
    },
    invoiceTitle: {
      fontSize: 24,
      fontWeight: "bold",
      marginBottom: 16,
    },
    billInfoContainer: {
      display: "flex",
      justifyContent: "space-between",
      marginBottom: 16,
    },
    billInfoRow: {
      display: "flex",
      flexDirection: "column",
    },
    tableContainer: {
      flex: 1,
      marginBottom: 24,
    },
    tableRow: {
      display: "flex",
      justifyContent: "space-between",
      marginBottom: 8,
    },
    headerText: {
      fontWeight: "bold",
      flex: 1,
    },
    totalRow: {
      borderTopWidth: 1,
      borderTopColor: "#000",
      marginTop: 8,
      paddingTop: 8,
    },
    totalText: {
      fontWeight: "bold",
    },
    netAmountRow: {
      marginTop: 8,
      paddingTop: 8,
      borderTopWidth: 1,
      borderTopColor: "#000",
    },
    netAmountText: {
      fontWeight: "bold",
    },
    footer: {
      marginTop: "auto",
    },
    footerText: {
      fontSize: 16,
      textAlign: "center",
    },
  };
  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h1 style={styles.companyName}>AMIT CHAMBIAL PVT LTD</h1>
        <p style={styles.address}>
          FLoor 2 Building No 34 India <br /> Phone No- 0192083910
        </p>
        <p style={styles.panTin}>PAN: AAKPS9298A TIN: 09820163701</p>
        <h2 style={styles.invoiceTitle}>RETAIL INVOICE</h2>
        <div style={styles.billInfoContainer}>
          <div style={styles.billInfoRow}>
            <p>BILL NO: 091</p>
            <p>TABLE NO: 091</p>
          </div>
          <div style={styles.billInfoRow}>
            <p>BILL DATE: 10/Mar/2022</p>
            <p>TIME: 14:10</p>
          </div>
        </div>
      </div>
      <div style={styles.tableContainer}>
        <div style={styles.tableRow}>
          <h3 style={{ flex: 3 }}>Particulars</h3>
          <h3 style={{ flex: 1 }}>Rate</h3>
          <h3 style={{ flex: 1 }}>Qty</h3>
          <h3 style={{ flex: 1 }}>Amount</h3>
        </div>
        <div style={styles.tableRow}>
          <p style={{ flex: 3 }}>Head and Shoulder</p>
          <p style={{ flex: 1 }}>100</p>
          <p style={{ flex: 1 }}>2</p>
          <p style={{ flex: 1 }}>200</p>
        </div>
        <div style={styles.tableRow}>
          <p style={{ flex: 3 }}>Britania</p>
          <p style={{ flex: 1 }}>25</p>
          <p style={{ flex: 1 }}>2</p>
          <p style={{ flex: 1 }}>50</p>
        </div>
        <div style={styles.tableRow}>
          <p style={{ flex: 3 }}>Tomatoes</p>
          <p style={{ flex: 1 }}>40</p>
          <p style={{ flex: 1 }}>1</p>
          <p style={{ flex: 1 }}>40</p>
        </div>
        <div style={styles.tableRow}>
          <p style={{ flex: 3 }}>Chocolates</p>
          <p style={{ flex: 1 }}>5</p>
          <p style={{ flex: 1 }}>1</p>
          <p style={{ flex: 1 }}>40</p>
        </div>

        <div style={[styles.tableRow, styles.totalRow]}>
          <p style={{ flex: 3 }} />
          <h3 style={[styles.totalText, { flex: 1 }]}>Grand Total</h3>
          <p style={{ flex: 1 }} />
          <p style={{ flex: 1 }}></p>
        </div>
        <div style={styles.footer}>
          <p style={styles.footerText}>Thank you for your business!</p>
        </div>
      </div>
    </div>
  );
};
export default Facture;
