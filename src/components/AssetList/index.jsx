import React from 'react';

import { formatNumber } from '../../helpers/formatNumber';
import { Icon, IconWrapper, Info, Item, Label, Left, List, Right, Symbol, Value } from './styles';

const AssetList = ({ assets }) => (
  <List>
    {assets.map((asset) => {
      const disabled = !asset.available;

      return (
        <Item key={asset.symbol} disabled={disabled}>
          <Info>
            <IconWrapper $color={!disabled ? asset.iconColor : null}>
              <Icon src={asset.icon} alt={asset.symbol} />
            </IconWrapper>
            <Left>
              <Symbol disabled={disabled}>{asset.symbol}</Symbol>
              {!disabled && <Value>{formatNumber(asset.price)} ₽</Value>}
            </Left>
          </Info>
          <Right>
            {!disabled ? (
              <>
                <Symbol>{formatNumber(asset.balanceLocal)} ₽</Symbol>
                <Value>
                  {formatNumber(asset.balanceCrypto)} {asset.symbol}
                </Value>
              </>
            ) : (
              <Label>Скоро</Label>
            )}
          </Right>
        </Item>
      );
    })}
  </List>
);

export default AssetList;
