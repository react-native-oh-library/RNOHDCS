import * as React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';

import { DataTable, Card, MD2Colors } from 'react-native-paper';
type ItemsState = Array<{
  key: number;
  name: string;
  calories: number;
  fat: number;
}>;
import {TestSuite,TestCase,Tester} from '@rnoh/testerino';

const numberOfItemsPerPageList = [2, 3, 4];

const items = [
  {
    key: 1,
    name: 'Page 1',
  },
  {
    key: 2,
    name: 'Page 2',
  },
  {
    key: 3,
    name: 'Page 3',
  },
];

type DataTablePage = {
  [key: string]: number;
};

export function DataTableText() {

  const [page, setPage] = React.useState<DataTablePage>({});
  const _getPage = (name: string) => page[name] ? page[name]:0;
  const _showPage = (name: string) => (pages:number) =>
  setPage({ ...page, [name]: pages });


  // const [page, setPage] = React.useState(0);
   const [numberOfItemsPerPage, onItemsPerPageChange] = React.useState(numberOfItemsPerPageList[0]);
  // const from = page * numberOfItemsPerPage;
  // const to = Math.min((page + 1) * numberOfItemsPerPage, items.length);
  
  const _onPress =() => {
    console.info('DataTable onPress')
  }

  // const _onPageChange = (page:number) => {
  //   console.info('_onPageChange===' + page)
  //   setPage(page)
  // }

  const _onItemsPerPageChange =(numberOfItemsPerPage: number) => {
    console.info('_onItemsPerPageChange===' + numberOfItemsPerPage)
    
    onItemsPerPageChange(numberOfItemsPerPage)
  }

  const DataTableCellProps = [
    {
        key: 'DataTableCell style: numeric  is true',
        value: {
          numeric:true
        } 
    },
    {
      key: 'DataTableCell style: numeric is true',
      value: {
        numeric:false
      } 
    },
    {
      key: 'DataTableCell fuction: onPress',
      value: {
        numeric:false,
        onPress:_onPress
      } 
    },
    {
      key: 'DataTableCell style: {backgroundColor:MD2Colors.red100}',
      value: {
        numeric:false,
        onPress:_onPress,
        style:{backgroundColor:MD2Colors.red100}
      } 
    },
    {
      key: 'DataTableCell textStyle: {colors:MD2Colors.red100}',
      value: {
        numeric:false,
        onPress:_onPress,
        textStyle:{color:MD2Colors.red100}
      } 
    },
    {
      key: 'DataTableCell style: maxFontSizeMultiplier is 1',
      value: {
        numeric:false,
        onPress:_onPress,
        maxFontSizeMultiplier:1
      } 
    },
    {
      key: 'DataTableCell style: maxFontSizeMultiplier is 2',
      value: {
        numeric:false,
        onPress:_onPress,
        maxFontSizeMultiplier:2
      } 
    },

    {
      key: 'DataTableCell style: testID is DataTableCell',
      value: {
        numeric:false,
        onPress:_onPress,
        testID:'DataTableCell'
      } 
    },
    {
      key: 'DataTableCell style: testID is DataTableCell1',
      value: {
        numeric:false,
        onPress:_onPress,
        testID:'DataTableCell1'
      } 
    },
  ]

  const DataTableHeaderProps = [
    {
        key: 'DataTableHeader style: children   is <DataTable.Title numeric>Calories</DataTable.Title>',
        value: {
          style:styles.first
        } 
    },
    {
      key: 'DataTableHeader style:{backgroundColor:MD2Colors.red100} ',
      value: {
        style:{backgroundColor:MD2Colors.red100}
      }
    },
    {
      key: 'DataTableHeader theme:{ colors: { primary: "green" }',
      value: {
        theme:{ colors: { primary: 'green' } }
      }
    },
  ]

  const DataTablePaginationProps = [
    {
        key: 'DataTableHeader style: page ={_getPage("DataTablePagination")}',
        value: {
          page:_getPage('DataTablePagination'),
          numberOfPages:items.length,
          onPageChange:_showPage('DataTablePagination'),
          label:'Pagination',
          showFastPaginationControls:true,
          paginationControlRippleColor:MD2Colors.red100,
          numberOfItemsPerPageList:numberOfItemsPerPageList,
          numberOfItemsPerPage:numberOfItemsPerPage,
          onItemsPerPageChange:_onItemsPerPageChange,
          selectPageDropdownLabel:'Rows per page'
        } 
    },
    {
      key: 'DataTableHeader style: numberOfPages = {items.length}',
      value: {
        page:_getPage('DataTablePagination1'),
        onPageChange:_showPage('DataTablePagination1'),
        numberOfPages:items.length,
        label:'Pagination',
        showFastPaginationControls:true,
        paginationControlRippleColor:MD2Colors.red100,
        numberOfItemsPerPageList:numberOfItemsPerPageList,
        numberOfItemsPerPage:numberOfItemsPerPage,
        onItemsPerPageChange:_onItemsPerPageChange,
        selectPageDropdownLabel:'Rows per page'
      } 
    },
    {
      key: 'DataTableHeader fuction: onPageChange  = {_showPage("DataTablePagination2")}',
      value: {
        page:_getPage('DataTablePagination2'),
        onPageChange:_showPage('DataTablePagination2'),
        numberOfPages:items.length,
        label:'Pagination',
        showFastPaginationControls:true,
        paginationControlRippleColor:MD2Colors.red100,
        numberOfItemsPerPageList:numberOfItemsPerPageList,
        numberOfItemsPerPage:numberOfItemsPerPage,
        onItemsPerPageChange:_onItemsPerPageChange,
        selectPageDropdownLabel:'Rows per page'
      } 
    },
    {
      key: 'DataTableHeader fuction: showFastPaginationControls  = {true}',
      value: {
        page:_getPage('DataTablePagination2'),
        onPageChange:_showPage('DataTablePagination2'),
        numberOfPages:items.length,
        label:'Pagination',
        showFastPaginationControls:true,
        paginationControlRippleColor:MD2Colors.red100,
        numberOfItemsPerPageList:numberOfItemsPerPageList,
        numberOfItemsPerPage:numberOfItemsPerPage,
        onItemsPerPageChange:_onItemsPerPageChange,
        selectPageDropdownLabel:'Rows per page'
      } 
    },
    {
      key: 'DataTableHeader fuction: showFastPaginationControls  = {false}',
      value: {
        page:_getPage('DataTablePagination2'),
        onPageChange:_showPage('DataTablePagination2'),
        numberOfPages:items.length,
        label:'Pagination',
        showFastPaginationControls:false,
        paginationControlRippleColor:MD2Colors.red100,
        numberOfItemsPerPageList:numberOfItemsPerPageList,
        numberOfItemsPerPage:numberOfItemsPerPage,
        onItemsPerPageChange:_onItemsPerPageChange,
        selectPageDropdownLabel:'Rows per page'
      } 
    },
    {
      key: 'DataTableHeader fuction: paginationControlRippleColor  = {MD2Colors.red100}',
      value: {
        page:_getPage('DataTablePagination2'),
        onPageChange:_showPage('DataTablePagination2'),
        numberOfPages:items.length,
        label:'Pagination',
        showFastPaginationControls:false,
        paginationControlRippleColor:MD2Colors.red100,
        numberOfItemsPerPageList:numberOfItemsPerPageList,
        numberOfItemsPerPage:numberOfItemsPerPage,
        onItemsPerPageChange:_onItemsPerPageChange,
        selectPageDropdownLabel:'Rows per page'
      } 
    },
    {
      key: 'DataTableHeader style: theme  = { colors: { primary: "green" } }',
      value: {
        page:_getPage('DataTablePagination2'),
        onPageChange:_showPage('DataTablePagination2'),
        numberOfPages:items.length,
        label:'Pagination',
        numberOfItemsPerPageList:numberOfItemsPerPageList,
        numberOfItemsPerPage:numberOfItemsPerPage,
        onItemsPerPageChange:_onItemsPerPageChange,
        selectPageDropdownLabel:'Rows per page',
        theme:{ colors: { primary: 'green' } }
      } 
    },
    {
      key: 'DataTableHeader style: numberOfItemsPerPage  = { numberOfItemsPerPage}',
      value: {
        page:_getPage('DataTablePagination2'),
        onPageChange:_showPage('DataTablePagination2'),
        numberOfPages:items.length,
        label:'Pagination',
        numberOfItemsPerPageList:numberOfItemsPerPageList,
        numberOfItemsPerPage:numberOfItemsPerPage,
        onItemsPerPageChange:_onItemsPerPageChange,
        selectPageDropdownLabel:'Rows per page',
      } 
    },
    {
      key: 'DataTableHeader style: numberOfItemsPerPageList  = { numberOfItemsPerPageList}',
      value: {
        page:_getPage('DataTablePagination2'),
        onPageChange:_showPage('DataTablePagination2'),
        numberOfPages:items.length,
        label:'Pagination',
        numberOfItemsPerPageList:numberOfItemsPerPageList,
        numberOfItemsPerPage:numberOfItemsPerPage,
        onItemsPerPageChange:_onItemsPerPageChange,
        selectPageDropdownLabel:'Rows per page',
      } 
    },
    {
      key: 'DataTableHeader style: dropdownItemRippleColor  = { MD2Colors.red100}',
      value: {
        page:_getPage('DataTablePagination2'),
        onPageChange:_showPage('DataTablePagination2'),
        numberOfPages:items.length,
        label:'Pagination',
        numberOfItemsPerPageList:numberOfItemsPerPageList,
        numberOfItemsPerPage:numberOfItemsPerPage,
        onItemsPerPageChange:_onItemsPerPageChange,
        selectPageDropdownLabel:'Rows per page',
        dropdownItemRippleColor:MD2Colors.red100
      } 
    },
    {
      key: 'DataTableHeader style: selectPageDropdownRippleColor  = { MD2Colors.red100}',
      value: {
        page:_getPage('DataTablePagination2'),
        onPageChange:_showPage('DataTablePagination2'),
        numberOfPages:items.length,
        label:'Pagination',
        numberOfItemsPerPageList:numberOfItemsPerPageList,
        numberOfItemsPerPage:numberOfItemsPerPage,
        onItemsPerPageChange:_onItemsPerPageChange,
        selectPageDropdownLabel:'Rows per page',
        selectPageDropdownRippleColor:MD2Colors.red100
      } 
    },
    {
      key: 'DataTableHeader style: selectPageDropdownLabel  = { "Rows per page1"}',
      value: {
        page:_getPage('DataTablePagination2'),
        onPageChange:_showPage('DataTablePagination2'),
        numberOfPages:items.length,
        label:'Pagination',
        numberOfItemsPerPageList:numberOfItemsPerPageList,
        numberOfItemsPerPage:numberOfItemsPerPage,
        onItemsPerPageChange:_onItemsPerPageChange,
        selectPageDropdownLabel:'Rows per page1',
        selectPageDropdownRippleColor:MD2Colors.red100
      } 
    },
    {
      key: 'DataTableHeader style: selectPageDropdownAccessibilityLabel  = { "selectPageDropdownAccessibilityLabel"}',
      value: {
        page:_getPage('DataTablePagination2'),
        onPageChange:_showPage('DataTablePagination2'),
        numberOfPages:items.length,
        label:'Pagination',
        numberOfItemsPerPageList:numberOfItemsPerPageList,
        numberOfItemsPerPage:numberOfItemsPerPage,
        onItemsPerPageChange:_onItemsPerPageChange,
        selectPageDropdownLabel:'Rows per page1',
        selectPageDropdownAccessibilityLabel:'selectPageDropdownAccessibilityLabel'
      } 
    },
    {
      key: 'DataTableHeader style: selectPageDropdownAccessibilityLabel  = { "selectPageDropdownAccessibilityLabel1"}',
      value: {
        page:_getPage('DataTablePagination2'),
        onPageChange:_showPage('DataTablePagination2'),
        numberOfPages:items.length,
        label:'Pagination',
        numberOfItemsPerPageList:numberOfItemsPerPageList,
        numberOfItemsPerPage:numberOfItemsPerPage,
        onItemsPerPageChange:_onItemsPerPageChange,
        selectPageDropdownLabel:'Rows per page1',
        selectPageDropdownAccessibilityLabel:'selectPageDropdownAccessibilityLabel1'
      } 
    },
    {
      key: 'DataTableHeader style: label  = { "Pagination1"}',
      value: {
        page:_getPage('DataTablePagination2'),
        onPageChange:_showPage('DataTablePagination2'),
        numberOfPages:items.length,
        label:'Pagination1',
        numberOfItemsPerPageList:numberOfItemsPerPageList,
        numberOfItemsPerPage:numberOfItemsPerPage,
        onItemsPerPageChange:_onItemsPerPageChange,
        selectPageDropdownLabel:'Rows per page1',
      } 
    },
    {
      key: 'DataTableHeader style: accessibilityLabel  = { "accessibilityLabel1"}',
      value: {
        page:_getPage('DataTablePagination2'),
        onPageChange:_showPage('DataTablePagination2'),
        numberOfPages:items.length,
        label:'Pagination1',
        numberOfItemsPerPageList:numberOfItemsPerPageList,
        numberOfItemsPerPage:numberOfItemsPerPage,
        onItemsPerPageChange:_onItemsPerPageChange,
        accessibilityLabel:'accessibilityLabel1',
      } 
    },
    {
      key: 'DataTableHeader style: accessibilityLabel  = { "accessibilityLabel1"}',
      value: {
        page:_getPage('DataTablePagination2'),
        onPageChange:_showPage('DataTablePagination2'),
        numberOfPages:items.length,
        label:'Pagination1',
        numberOfItemsPerPageList:numberOfItemsPerPageList,
        numberOfItemsPerPage:numberOfItemsPerPage,
        onItemsPerPageChange:_onItemsPerPageChange,
        style:{backgroundColor:MD2Colors.yellow500},
      } 
    },
  ]

  const DataTableRowProps = [
    {
      key: 'DataTableHeader style: children  is <DataTable.Cell numeric>1</DataTable.Cell>',
      value: {
        styles:styles.first
      }
    },
    {
      key: 'DataTableHeader fuction: onPress',
      value: {
        styles:styles.first,
        onPress:_onPress
      }
    },
    {
      key: 'DataTableHeader styles: {backgroundColor:MD2Colors.red100}',
      value: {
        style:{backgroundColor:MD2Colors.red100},
      }
    },
    {
      key: 'DataTableHeader styles: { colors: { primary: "green" } }',
      value: {
        theme:{ colors: { primary: 'green' } }
      }
    },
    {
      key: 'DataTableHeader styles: pointerEvents is auto',
      value: {
        pointerEvents:'auto' as "box-none" | "none" | "box-only" | "auto"
      }
    },
  ]

  const _OnDataTableTitlePress =() => {
    console.info('OnDataTableTitlePress ====')
  }

  const DataTableTitleProps = [
    {
      key: 'DataTableTitle style: children  is Dessert',
      value: {
        styles:styles.first
      },
      test:'Dessert'
    },
    {
      key: 'DataTableTitle style: numeric  is true',
      value: {
        styles:styles.first,
        numeric:true
      },
      test:'Dessert'
    },
    {
      key: 'DataTableTitle style: numeric  is false',
      value: {
        styles:styles.first,
        numeric:false
      },
      test:'Dessert'
    },
    {
      key: 'DataTableTitle style: sortDirection  is sortDirection',
      value: {
        styles:styles.first,
        sortDirection:'ascending' as 'ascending' | 'descending'
      },
      test:'Dessert'
    },
    {
      key: 'DataTableTitle style: sortDirection  is descending',
      value: {
        styles:styles.first,
        sortDirection:'descending' as 'ascending' | 'descending'
      },
      test:'Dessert'
    },
    {
      key: 'DataTableTitle style: numberOfLines  is 1',
      value: {
        styles:styles.first,
        numberOfLines:1
      },
      test:'Dessert Dessert Dessert Dessert'
    },
    {
      key: 'DataTableTitle style: numberOfLines  is 2',
      value: {
        styles:styles.first,
        numberOfLines:2
      },
      test:'Dessert Dessert Dessert Dessert'
    },
    {
      key: 'DataTableTitle fuction:onPress',
      value: {
        styles:styles.first,
        onPress:_OnDataTableTitlePress
      },
      test:'Dessert'
    },
    {
      key: 'DataTableTitle style:{backgroundColor:MD2Colors.red100}',
      value: {
        style:{backgroundColor:MD2Colors.red100},
      },
      test:'Dessert'
    },
    {
      key: 'DataTableTitle textStyle:{color:MD2Colors.red100}',
      value: {
        textStyle:{color:MD2Colors.red100},
      },
      test:'Dessert'
    },
    {
      key: 'DataTableTitle Style:maxFontSizeMultiplier is 1',
      value: {
        styles:styles.first,
        maxFontSizeMultiplier:1
      },
      test:'Dessert'
    },
    {
      key: 'DataTableTitle Style:maxFontSizeMultiplier is 2',
      value: {
        styles:styles.first,
        maxFontSizeMultiplier:2
      },
      test:'Dessert'
    },
    {
      key: 'DataTableTitle Style:theme is { colors: { primary:"green" } }',
      value: {
        theme:{ colors: { primary: 'green' } }
      },
      test:'Dessert'
    },
  ]

  return (
    <Tester>
      <ScrollView>
        <TestSuite name='DataTable' >
        {DataTableCellProps.map((item) => {
            return (
              <TestCase itShould={item.key}  key={item.key}>
                      <DataTable.Row>
                        <DataTable.Cell >1</DataTable.Cell>
                        <DataTable.Cell {...item.value}>2</DataTable.Cell>
                        <DataTable.Cell {...item.value}>3</DataTable.Cell>
                        <DataTable.Cell {...item.value}>4</DataTable.Cell>
                      </DataTable.Row>
              </TestCase>
            );
        })} 
        {DataTableHeaderProps.map((item) => {
            return (
              <TestCase itShould={item.key}  key={item.key}>
                <DataTable>
                  <DataTable.Header theme={{ colors: { primary: 'green' }}}>
                    <DataTable.Title theme={{ colors: { primary: 'green' }}}
                      sortDirection='descending'
                    >
                      Dessert
                    </DataTable.Title>
                    <DataTable.Title numeric>Calories</DataTable.Title>
                    <DataTable.Title numeric>Fat (g)</DataTable.Title>
                  </DataTable.Header>
                </DataTable>
              </TestCase>
            );
        })} 
         {DataTablePaginationProps.map((item) => {
            return (
              <TestCase itShould={item.key}  key={item.key}>
                <DataTable>
                  <DataTable.Pagination {...item.value}/>
              </DataTable>
            </TestCase>
            );
        })} 
        {DataTableRowProps.map((item) => {
            return (
              <TestCase itShould={item.key}  key={item.key}>
                <DataTable.Row {...item.value}>
                  <DataTable.Cell numeric>1</DataTable.Cell>
                  <DataTable.Cell numeric>2</DataTable.Cell>
                  <DataTable.Cell numeric>3</DataTable.Cell>
                  <DataTable.Cell numeric>4</DataTable.Cell>
                </DataTable.Row>
            </TestCase>
            );
        })} 
        {DataTableTitleProps.map((item) => {
            return (
              <TestCase itShould={item.key}  key={item.key}>
                <DataTable>
                  <DataTable.Header>
                    <DataTable.Title {...item.value}>{item.test}</DataTable.Title>
                    <DataTable.Title {...item.value}>Calories</DataTable.Title>
                    <DataTable.Title {...item.value}>Fat (g)</DataTable.Title>
                  </DataTable.Header>
                </DataTable>
            </TestCase>
            );
        })} 
       </TestSuite>
      </ScrollView>
    </Tester>
  )
}

const styles = StyleSheet.create({
  content: {
    padding: 8,
    backgroundColor:'white',
  },
  first: {
    flex: 2,
  },
});

export default DataTableText;
