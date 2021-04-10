// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: fiUhXe8Zsj5ebqGZX94BP2
// Component: J5pjwZEZFc7kRk
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import {
  hasVariant,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_play_plasmic_levels_start_here.module.css"; // plasmic-import: fiUhXe8Zsj5ebqGZX94BP2/projectcss
import * as sty from "./PlasmicLandmarks.module.css"; // plasmic-import: J5pjwZEZFc7kRk/css
import Icon12Icon from "./icons/PlasmicIcon__Icon12"; // plasmic-import: sWIQcgAmyUL4qh/icon

export const PlasmicLandmarks__VariantProps = new Array("variants");

export const PlasmicLandmarks__ArgProps = new Array();

function PlasmicLandmarks__RenderFunc(props) {
  const { variants, args, overrides, forNode } = props;
  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(defaultcss.all, projectcss.root_reset, sty.root, {
        [sty.root__variants_wide]: hasVariant(variants, "variants", "wide")
      })}
    >
      <div
        className={classNames(
          defaultcss.all,
          defaultcss.__wab_text,
          sty.box___9SkI0,
          {
            [sty.box__variants_wide___9SkI0LunGw]: hasVariant(
              variants,
              "variants",
              "wide"
            )
          }
        )}
      >
        {"Landmarks"}
      </div>

      <p.Stack
        as={"div"}
        hasGap={true}
        className={classNames(defaultcss.all, sty.box__l5JHb, {
          [sty.box__variants_wide__l5JHbLunGw]: hasVariant(
            variants,
            "variants",
            "wide"
          )
        })}
      >
        <div
          className={classNames(defaultcss.all, sty.box__pVa7, {
            [sty.box__variants_wide__pVa7LunGw]: hasVariant(
              variants,
              "variants",
              "wide"
            )
          })}
        >
          <div
            className={classNames(
              defaultcss.all,
              defaultcss.__wab_text,
              sty.box__o9Ewm
            )}
          >
            {"Mission Dolores Park"}
          </div>

          <div
            className={classNames(
              defaultcss.all,
              defaultcss.__wab_text,
              sty.box__ztaGq
            )}
          >
            {"Park"}
          </div>

          <Icon12Icon
            className={classNames(defaultcss.all, sty.svg__lRPtS)}
            role={"img"}
          />
        </div>

        <div
          className={classNames(defaultcss.all, sty.box__cYkMm, {
            [sty.box__variants_wide__cYkMmLunGw]: hasVariant(
              variants,
              "variants",
              "wide"
            )
          })}
        >
          <div
            className={classNames(
              defaultcss.all,
              defaultcss.__wab_text,
              sty.box___0Nlp,
              {
                [sty.box__variants_wide___0NlpLunGw]: hasVariant(
                  variants,
                  "variants",
                  "wide"
                )
              }
            )}
          >
            {"Mission Dolores Park"}
          </div>

          <div
            className={classNames(
              defaultcss.all,
              defaultcss.__wab_text,
              sty.box__vWeAp
            )}
          >
            {"Park"}
          </div>

          <Icon12Icon
            className={classNames(defaultcss.all, sty.svg___5SwUe)}
            role={"img"}
          />
        </div>

        <div
          className={classNames(defaultcss.all, sty.box__gpcAt, {
            [sty.box__variants_wide__gpcAtLunGw]: hasVariant(
              variants,
              "variants",
              "wide"
            )
          })}
        >
          <div
            className={classNames(
              defaultcss.all,
              defaultcss.__wab_text,
              sty.box___7N3Pw
            )}
          >
            {"Mission Dolores Park"}
          </div>

          <div
            className={classNames(
              defaultcss.all,
              defaultcss.__wab_text,
              sty.box___7Cfcs
            )}
          >
            {"Park"}
          </div>

          <Icon12Icon
            className={classNames(defaultcss.all, sty.svg__uj5Xl)}
            role={"img"}
          />
        </div>
      </p.Stack>
    </div>
  );
}

const PlasmicDescendants = {
  root: ["root"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicLandmarks__ArgProps,
      internalVariantPropNames: PlasmicLandmarks__VariantProps
    });

    return PlasmicLandmarks__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicLandmarks";
  } else {
    func.displayName = `PlasmicLandmarks.${nodeName}`;
  }
  return func;
}

export const PlasmicLandmarks = Object.assign(
  // Top-level PlasmicLandmarks renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    // Metadata about props expected for PlasmicLandmarks
    internalVariantProps: PlasmicLandmarks__VariantProps,
    internalArgProps: PlasmicLandmarks__ArgProps
  }
);

export default PlasmicLandmarks;
/* prettier-ignore-end */
